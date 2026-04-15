"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect as useBrowserLayoutEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useBrowserLayoutEffect : useEffect;
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import { css } from "styled-system/css";
import { DropdownItem } from "../dropdown";
import {
  selectMenuWrapperRecipe,
  selectMenuLabelRecipe,
  selectMenuContainerRecipe,
  selectMenuTriggerRecipe,
  selectMenuChevronRecipe,
  selectMenuPanelRecipe,
} from "./select-menu.recipe";

const activeOptionClass = css({ bg: "bg.muted" });

export interface SelectMenuOption {
  /** Stable value returned to `onChange` and compared against `value` / `defaultValue`. */
  value: string;
  /** Label rendered inside the trigger and the menu item. */
  label: ReactNode;
  /** Disables the individual option. */
  disabled?: boolean;
}

export interface SelectMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  /** Optional label rendered above the trigger. */
  label?: string;
  /** Placeholder shown when nothing is selected. */
  placeholder?: string;
  /** Options rendered inside the panel. */
  options: SelectMenuOption[];
  /** Error state — outlines the trigger in red. */
  error?: boolean;
  /** Disables the trigger and prevents opening the panel. */
  disabled?: boolean;
  /** Controlled value. When provided, the component is controlled and `defaultValue` is ignored. */
  value?: string;
  /** Initial value for uncontrolled usage. */
  defaultValue?: string;
  /** Fires with the new value when an option is selected. */
  onChange?: (value: string) => void;
}

/**
 * SelectMenu — Select control with a DS-styled dropdown panel.
 *
 * Unlike `Select` (native `<select>`), `SelectMenu` renders a custom floating
 * panel composed of `DropdownItem`s so it can match the design system's
 * dropdown look inside modals and forms. Use `Select` when native-form
 * behavior or mobile picker UI matters.
 *
 * Client component — requires `"use client"` in Next.js.
 */
export function SelectMenu({
  label,
  placeholder,
  options,
  error,
  disabled,
  value,
  defaultValue,
  onChange,
  className,
  id,
  ...rest
}: SelectMenuProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue,
  );
  const current = isControlled ? value : internalValue;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [panelRect, setPanelRect] = useState<{ top: number; left: number; width: number } | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const reactId = useId();
  const labelId = label ? `${id ?? reactId}-label` : undefined;
  const listboxId = `${id ?? reactId}-listbox`;
  const optionId = (index: number) => `${listboxId}-opt-${index}`;

  const currentIndex = useMemo(
    () => options.findIndex((o) => o.value === current),
    [options, current],
  );
  const currentOption = options[currentIndex];

  const commit = useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const openPanel = useCallback(() => {
    if (disabled) return;
    setOpen(true);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [disabled, currentIndex]);

  const closePanel = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!open) return;
    const updateRect = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      setPanelRect({ top: rect.bottom + 4, left: rect.left, width: rect.width });
    };
    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: MouseEvent) => {
      const target = event.target as Node;
      if (containerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      closePanel();
    };
    document.addEventListener("mousedown", handlePointer);
    return () => document.removeEventListener("mousedown", handlePointer);
  }, [open, closePanel]);

  const moveActive = useCallback(
    (delta: number) => {
      if (options.length === 0) return;
      setActiveIndex((prev) => {
        const start = prev < 0 ? (delta > 0 ? -1 : options.length) : prev;
        let next = start;
        for (let i = 0; i < options.length; i++) {
          next = (next + delta + options.length) % options.length;
          if (!options[next]!.disabled) return next;
        }
        return prev;
      });
    },
    [options],
  );

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        openPanel();
      } else if (event.key === "ArrowDown") {
        moveActive(1);
      } else if (event.key === "ArrowUp") {
        moveActive(-1);
      } else if (event.key === "Enter" || event.key === " ") {
        const option = options[activeIndex];
        if (option && !option.disabled) {
          commit(option.value);
          closePanel();
        }
      }
    } else if (event.key === "Escape" && open) {
      event.preventDefault();
      closePanel();
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${selectMenuWrapperRecipe()}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {label ? (
        <span id={labelId} className={selectMenuLabelRecipe()}>
          {label}
        </span>
      ) : null}
      <div className={selectMenuContainerRecipe()}>
        <button
          ref={triggerRef}
          type="button"
          id={id}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-labelledby={labelId}
          aria-activedescendant={
            open && activeIndex >= 0 ? optionId(activeIndex) : undefined
          }
          disabled={disabled}
          className={selectMenuTriggerRecipe({
            error,
            placeholder: !currentOption,
          })}
          onClick={() => (open ? closePanel() : openPanel())}
          onKeyDown={handleTriggerKeyDown}
        >
          <span>{currentOption?.label ?? placeholder ?? ""}</span>
          <span className={selectMenuChevronRecipe({ open })} aria-hidden="true">
            <ChevronDown size={16} />
          </span>
        </button>
      </div>
      {open && panelRect && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={panelRef}
              id={listboxId}
              role="listbox"
              aria-labelledby={labelId}
              className={selectMenuPanelRecipe()}
              style={{
                top: panelRect.top,
                left: panelRect.left,
                width: panelRect.width,
              }}
            >
              {options.map((option, index) => (
                <DropdownItem
                  key={option.value}
                  id={optionId(index)}
                  role="option"
                  aria-selected={option.value === current}
                  selected={option.value === current}
                  disabled={option.disabled}
                  className={index === activeIndex ? activeOptionClass : undefined}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    if (option.disabled) return;
                    commit(option.value);
                    closePanel();
                    triggerRef.current?.focus();
                  }}
                >
                  {option.label}
                </DropdownItem>
              ))}
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
