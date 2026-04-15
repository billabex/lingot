import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Tabs, TabItem } from "./index";

afterEach(cleanup);

describe("Tabs", () => {
  it("renders children", () => {
    render(
      <Tabs>
        <TabItem>Overview</TabItem>
      </Tabs>,
    );
    expect(screen.getByText("Overview")).toBeTruthy();
  });

  it("has tablist role", () => {
    render(
      <Tabs>
        <TabItem>Overview</TabItem>
      </Tabs>,
    );
    expect(screen.getByRole("tablist")).toBeTruthy();
  });

  it("applies custom className", () => {
    render(
      <Tabs className="custom">
        <TabItem>Overview</TabItem>
      </Tabs>,
    );
    expect(screen.getByRole("tablist").className).toContain("custom");
  });
});
