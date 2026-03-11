import type {
  ColorToken,
  DimensionToken,
  ShadowToken,
  TypographyToken,
} from "@billabex/ui-tokens";
import type { CSSProperties, ReactNode } from "react";

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const mono: CSSProperties = {
  fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
  fontSize: 12,
};

const label: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#1c1917",
};

const sub: CSSProperties = {
  ...mono,
  color: "#534840",
};

// ---------------------------------------------------------------------------
// ColorGrid — renders a Record<string, ColorToken> as swatches
// ---------------------------------------------------------------------------

export function ColorGrid({
  tokens,
  title,
}: {
  tokens: Record<string, ColorToken>;
  title?: string;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      {title && (
        <h4 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 600 }}>
          {title}
        </h4>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 12,
        }}
      >
        {Object.entries(tokens).map(([name, token]) => (
          <div key={name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                width: "100%",
                height: 56,
                borderRadius: 8,
                backgroundColor: token.hex,
                border: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            />
            <span style={label}>{name}</span>
            <span style={sub}>{token.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SemanticColorTable — renders semantic tokens with name, hex, and primitive ref
// ---------------------------------------------------------------------------

export function SemanticColorTable({
  tokens,
  references,
}: {
  tokens: Record<string, ColorToken>;
  references?: Record<string, string>;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 12,
        marginBottom: 32,
      }}
    >
      {Object.entries(tokens).map(([name, token]) => (
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #e3dbd2",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 6,
              backgroundColor: token.hex,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              flexShrink: 0,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span style={label}>{name}</span>
            <span style={sub}>{token.hex}</span>
            {references?.[name] && (
              <span style={{ ...mono, fontSize: 11, color: "#9c8e82" }}>
                ← {references[name]}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SpacingScale — renders spacing tokens as horizontal bars
// ---------------------------------------------------------------------------

export function SpacingScale({
  tokens,
}: {
  tokens: Record<string, DimensionToken>;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
      {Object.entries(tokens).map(([name, token]) => (
        <div
          key={name}
          style={{
            display: "grid",
            gridTemplateColumns: "60px 80px 1fr",
            alignItems: "center",
            gap: 12,
            height: 32,
          }}
        >
          <span style={label}>{name}</span>
          <span style={sub}>
            {token.px} / {token.rem}
          </span>
          <div
            style={{
              height: Math.max(token.value, 4),
              width: token.value * 4,
              maxWidth: "100%",
              backgroundColor: "#1c1917",
              borderRadius: 4,
              transition: "width 0.2s",
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// TypographyScale — renders typography tokens as sample text
// ---------------------------------------------------------------------------

export function TypographyScale({
  tokens,
}: {
  tokens: Record<string, TypographyToken>;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
      {Object.entries(tokens).map(([name, token]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: 16,
            borderRadius: 8,
            border: "1px solid #e3dbd2",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
            <span style={label}>{name}</span>
            <span style={sub}>
              {token.fontWeight} · {token.fontSize.px} / {token.lineHeight.px}
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: token.fontFamily,
              fontWeight: token.fontWeight,
              fontSize: token.fontSize.value,
              lineHeight: `${token.lineHeight.value}px`,
              letterSpacing: token.letterSpacing.value,
              color: "#1c1917",
            }}
          >
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ShadowScale — renders shadow tokens on cards
// ---------------------------------------------------------------------------

export function ShadowScale({
  tokens,
}: {
  tokens: Record<string, ShadowToken>;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 24,
        marginBottom: 32,
      }}
    >
      {Object.entries(tokens).map(([name, token]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 96,
              borderRadius: 12,
              backgroundColor: "#ffffff",
              boxShadow: token.css,
            }}
          />
          <span style={label}>{name}</span>
          <span style={{ ...sub, textAlign: "center", wordBreak: "break-all" }}>
            {token.css}
          </span>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// RadiiScale — renders border-radius tokens as boxes
// ---------------------------------------------------------------------------

export function RadiiScale({
  tokens,
}: {
  tokens: Record<string, DimensionToken>;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
        marginBottom: 32,
      }}
    >
      {Object.entries(tokens).map(([name, token]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: token.value >= 9999 ? "50%" : token.px,
              backgroundColor: "#f5f0eb",
              border: "2px solid #1c1917",
            }}
          />
          <span style={label}>{name}</span>
          <span style={sub}>{token.px}</span>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tip — a small callout box for usage hints
// ---------------------------------------------------------------------------

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        borderRadius: 8,
        backgroundColor: "#e8ecf2",
        borderLeft: "3px solid #1e4a8a",
        fontSize: 13,
        lineHeight: 1.5,
        color: "#1c1917",
        marginBottom: 24,
      }}
    >
      {children}
    </div>
  );
}
