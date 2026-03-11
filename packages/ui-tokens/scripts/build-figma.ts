// ---------------------------------------------------------------------------
// build-figma.ts — Generates tokens.json in W3C DTCG format
// Compatible with Figma Token Studio (free version, single-file git sync)
// ---------------------------------------------------------------------------
// Usage: pnpm build:figma
// Output: packages/ui-tokens/tokens.json
// ---------------------------------------------------------------------------

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import type { ColorToken, DimensionToken, ShadowToken, TypographyToken } from "../src/types.js";
import * as primitive from "../src/tokens/primitive.js";
import * as semantic from "../src/tokens/semantic.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Helpers to convert token objects → W3C DTCG JSON
// ---------------------------------------------------------------------------

function colorToDTCG(token: ColorToken) {
  return { $value: token.hex, $type: "color" as const };
}

function dimensionToDTCG(token: DimensionToken) {
  return { $value: `${token.value}px`, $type: "dimension" as const };
}

function shadowToDTCG(token: ShadowToken) {
  return {
    $value: {
      offsetX: `${token.offsetX}px`,
      offsetY: `${token.offsetY}px`,
      blur: `${token.blur}px`,
      spread: `${token.spread}px`,
      color: token.color.rgba(1),
    },
    $type: "shadow" as const,
  };
}

function typographyToDTCG(token: TypographyToken) {
  return {
    $value: {
      fontFamily: token.fontFamily,
      fontWeight: token.fontWeight,
      fontSize: `${token.fontSize.value}px`,
      lineHeight: `${token.lineHeight.value}px`,
      letterSpacing: `${token.letterSpacing.value}px`,
    },
    $type: "typography" as const,
  };
}
// ---------------------------------------------------------------------------
// Build a reverse lookup: ColorToken instance → DTCG reference path
// Since semantic tokens are direct object references to primitive tokens,
// we use identity (===) to resolve the reference path.
// ---------------------------------------------------------------------------

function buildColorRefMap(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: Record<string, any>,
  prefix: string,
): Map<ColorToken, string> {
  const map = new Map<ColorToken, string>();
  for (const [key, value] of Object.entries(obj)) {
    const path = `${prefix}.${key}`;
    if (value && typeof value === "object" && "hex" in value) {
      map.set(value as ColorToken, `{${path}}`);
    } else if (value && typeof value === "object") {
      for (const [k, v] of buildColorRefMap(value as Record<string, unknown>, path)) {
        map.set(k, v);
      }
    }
  }
  return map;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenColors(obj: Record<string, any>, prefix = ""): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}/${key}` : key;
    if (value && typeof value === "object" && "hex" in value) {
      result[path] = colorToDTCG(value as ColorToken);
    } else if (value && typeof value === "object") {
      Object.assign(result, flattenColors(value as Record<string, unknown>, path));
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Build the token sets
// ---------------------------------------------------------------------------

function buildGlobalSet() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tokens: Record<string, any> = {};

  // Primitive colors
  const flatColors = flattenColors(primitive.colors);
  tokens["color"] = {};
  for (const [path, val] of Object.entries(flatColors)) {
    const parts = path.split("/");
    let target = tokens["color"];
    for (let i = 0; i < parts.length - 1; i++) {
      target[parts[i]!] = target[parts[i]!] || {};
      target = target[parts[i]!];
    }
    target[parts[parts.length - 1]!] = val;
  }

  // Spacing
  tokens["spacing"] = {};
  for (const [key, val] of Object.entries(primitive.spacing)) {
    tokens["spacing"][key] = dimensionToDTCG(val);
  }

  // Padding
  tokens["padding"] = {};
  for (const [key, val] of Object.entries(primitive.padding)) {
    tokens["padding"][key] = dimensionToDTCG(val);
  }

  // Radii
  tokens["radius"] = {};
  for (const [key, val] of Object.entries(primitive.radii)) {
    tokens["radius"][key] = dimensionToDTCG(val);
  }

  // Shadows
  tokens["shadow"] = {};
  for (const [key, val] of Object.entries(primitive.shadows)) {
    tokens["shadow"][key] = shadowToDTCG(val);
  }

  // Typography
  tokens["typography"] = {};
  for (const [key, val] of Object.entries(primitive.typography)) {
    tokens["typography"][key] = typographyToDTCG(val);
  }

  return tokens;
}

function buildSemanticSet(colorRefMap: Map<ColorToken, string>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tokens: Record<string, any> = {};

  const semanticGroups = {
    bg: semantic.bg,
    text: semantic.text,
    action: semantic.action,
    status: semantic.status,
    border: semantic.border,
  };

  for (const [groupName, group] of Object.entries(semanticGroups)) {
    tokens[groupName] = {};
    for (const [key, val] of Object.entries(group)) {
      const token = val as ColorToken;
      const ref = colorRefMap.get(token);
      if (ref) {
        // Emit a W3C DTCG reference to the primitive token
        tokens[groupName][key] = { $value: ref, $type: "color" as const };
      } else {
        // Fallback to raw value if no primitive match found
        tokens[groupName][key] = colorToDTCG(token);
      }
    }
  }

  return tokens;
}

// ---------------------------------------------------------------------------
// Assemble the single-file output
// ---------------------------------------------------------------------------

// Build the reverse map from the global color set
const colorRefMap = buildColorRefMap(primitive.colors, "global.color");

const output = {
  global: buildGlobalSet(),
  semantic: buildSemanticSet(colorRefMap),
  $metadata: {
    tokenSetOrder: ["global", "semantic"],
  },
};

const outputPath = resolve(__dirname, "../tokens.json");
writeFileSync(outputPath, JSON.stringify(output, null, 2) + "\n", "utf-8");

console.log(`✅ tokens.json generated at ${outputPath}`);
