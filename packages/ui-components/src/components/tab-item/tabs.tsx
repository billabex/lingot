import type { HTMLAttributes, ReactNode } from "react";
import { tabsRecipe } from "./tabs.recipe";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Tabs({ children, className, ...props }: TabsProps) {
  return (
    <div
      role="tablist"
      className={`${tabsRecipe()}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
