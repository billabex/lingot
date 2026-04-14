import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Bubble, type BubbleProps } from "./bubble";
import type { BubbleSide } from "./bubble.recipe";
import {
  bubbleGroupRecipe,
  bubbleGroupStackRecipe,
  bubbleGroupHeaderRecipe,
  bubbleGroupAuthorRecipe,
  bubbleGroupDateRecipe,
} from "./bubble-group.recipe";

export interface BubbleGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Which side of the conversation the group belongs to */
  side?: BubbleSide;
  /** Author name shown in the group header */
  author?: ReactNode;
  /** Date/time label shown in the group header */
  date?: ReactNode;
  /** One or more `<Bubble>` elements */
  children: ReactNode;
}

/**
 * BubbleGroup — Wraps a run of `<Bubble>` messages from the same speaker
 * with an author + date header, and aligns them consistently to one side.
 *
 * For the agent side, the header sits above the leftmost edge of the
 * bubbles; for the user side, it sits above the rightmost edge.
 *
 * RSC-compatible (no `'use client'` needed).
 */
export function BubbleGroup({
  side = "agent",
  author,
  date,
  children,
  className,
  ...props
}: BubbleGroupProps) {
  const injected = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Bubble) {
      const el = child as React.ReactElement<BubbleProps>;
      return cloneElement(el, { side: el.props.side ?? side });
    }
    return child;
  });

  return (
    <div
      className={`${bubbleGroupRecipe({ side })}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {(author || date) && (
        <div className={bubbleGroupHeaderRecipe()}>
          {author && <span className={bubbleGroupAuthorRecipe()}>{author}</span>}
          {date && <span className={bubbleGroupDateRecipe()}>{date}</span>}
        </div>
      )}
      <div className={bubbleGroupStackRecipe({ side })}>{injected}</div>
    </div>
  );
}
