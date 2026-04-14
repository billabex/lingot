import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Bubble, BubbleGroup, BubbleAttachment } from "./index";

afterEach(cleanup);

describe("Bubble", () => {
  it("renders children", () => {
    render(<Bubble>Hello</Bubble>);
    expect(screen.getByText("Hello")).toBeTruthy();
  });

  it("defaults to side=agent", () => {
    const { container } = render(<Bubble>Hello</Bubble>);
    expect(container.firstElementChild?.className).toMatch(/agent|inverse/i);
  });

  it("accepts side=user", () => {
    const { container } = render(<Bubble side="user">Hi</Bubble>);
    expect(container.firstElementChild).toBeTruthy();
  });
});

describe("BubbleGroup", () => {
  it("renders author and date header", () => {
    render(
      <BubbleGroup author="Amelia" date="1 avr.">
        <Bubble>Hi</Bubble>
      </BubbleGroup>
    );
    expect(screen.getByText("Amelia")).toBeTruthy();
    expect(screen.getByText("1 avr.")).toBeTruthy();
  });

  it("omits header when author and date are both absent", () => {
    render(
      <BubbleGroup>
        <Bubble>Hi</Bubble>
      </BubbleGroup>
    );
    expect(screen.getByText("Hi")).toBeTruthy();
  });

  it("injects side into child Bubbles", () => {
    render(
      <BubbleGroup side="user" author="Gilles">
        <Bubble>Yep</Bubble>
      </BubbleGroup>
    );
    expect(screen.getByText("Yep")).toBeTruthy();
  });

  it("respects an explicit side on a Bubble child", () => {
    render(
      <BubbleGroup side="user">
        <Bubble side="agent">Mixed</Bubble>
      </BubbleGroup>
    );
    expect(screen.getByText("Mixed")).toBeTruthy();
  });
});

describe("BubbleAttachment", () => {
  it("renders name and is a link", () => {
    render(<BubbleAttachment name="Contrat.pdf" href="/files/c.pdf" />);
    const link = screen.getByRole("link", { name: /Contrat\.pdf/ });
    expect(link.getAttribute("href")).toBe("/files/c.pdf");
  });

  it("accepts a custom icon", () => {
    render(
      <BubbleAttachment
        name="file"
        icon={<span data-testid="custom-icon" />}
      />
    );
    expect(screen.getByTestId("custom-icon")).toBeTruthy();
  });
});
