"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect as useBrowserLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { MoreVertical } from "lucide-react";
import { IconButton, type IconButtonSize } from "../icon-button";
import { DropdownMenu } from "../dropdown";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useBrowserLayoutEffect : useEffect;

export type OverflowMenuAlign = "start" | "end";

export interface OverflowMenuProps {
  /** `DropdownItem` / `Divider` children rendered inside the menu panel. */
  children: ReactNode;
  /** Accessible label for the kebab trigger. Describes what the menu opens (e.g. "Actions for invoice 2024-08-001"). */
  label: string;
  /** Panel alignment relative to the trigger. `end` (default) right-aligns, matching row-level kebab conventions. */
  align?: OverflowMenuAlign;
  /** Trigger IconButton size. */
  size?: IconButtonSize;
  /** Optional icon override for the trigger. Defaults to `MoreVertical` (the Lingot kebab). */
  icon?: ReactNode;
  /** Fires when the menu opens. */
  onOpen?: () => void;
  /** Fires when the menu closes (outside click, Escape, or DropdownItem selection). */
  onClose?: () => void;
}

/**
 * OverflowMenu — A kebab IconButton that opens a `DropdownMenu` panel of row / item actions.
 *
 * Consolidates portal positioning, outside-click dismissal, Escape handling, and
 * focus return around the standard kebab+menu pattern. The trigger calls
 * `e.stopPropagation()` on click so interactive table rows do not activate.
 *
 * Client component — requires `"use client"` in Next.js.
 */
export function OverflowMenu({
  children,
  label,
  align = "end",
  size = "small",
  icon,
  onOpen,
  onClose,
}: OverflowMenuProps) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<{ top: number; left?: number; right?: number } | null>(null);
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const menuId = useId();

  const focusTrigger = useCallback(() => {
    wrapperRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose]);

  const handleTriggerClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setOpen((prev) => {
        const next = !prev;
        if (next) onOpen?.();
        else onClose?.();
        return next;
      });
    },
    [onOpen, onClose],
  );

  useIsomorphicLayoutEffect(() => {
    if (!open) return;
    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const top = r.bottom + 4;
      if (align === "end") {
        setRect({ top, right: window.innerWidth - r.right });
      } else {
        setRect({ top, left: r.left });
      }
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, align]);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;
      if (wrapperRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      close();
    };
    const handleKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close();
        focusTrigger();
      }
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, close, focusTrigger]);

  const handlePanelClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("button")) {
      close();
      focusTrigger();
    }
  };

  return (
    <span
      ref={wrapperRef}
      style={{ position: "relative", display: "inline-flex" }}
    >
      <IconButton
        size={size}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        icon={icon ?? <MoreVertical size={size === "small" ? 14 : 16} />}
        onClick={handleTriggerClick}
      />
      {open && rect && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={panelRef}
              style={{
                position: "fixed",
                zIndex: 600,
                top: rect.top,
                left: rect.left,
                right: rect.right,
              }}
            >
              <DropdownMenu id={menuId} onClick={handlePanelClick}>
                {children}
              </DropdownMenu>
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}
