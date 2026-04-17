import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { TablePagination } from "./index";

afterEach(cleanup);

describe("TablePagination", () => {
  it("renders the default range label", () => {
    render(
      <TablePagination page={1} total={60} pageSize={25} onChange={() => {}} />,
    );
    expect(screen.getByText("1–25 of 60")).toBeTruthy();
  });

  it("renders a numbered button per page", () => {
    render(
      <TablePagination page={1} total={60} pageSize={25} onChange={() => {}} />,
    );
    expect(screen.getByRole("button", { name: "Page 1" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Page 2" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Page 3" })).toBeTruthy();
  });

  it("marks the current page with aria-current", () => {
    render(
      <TablePagination page={2} total={60} pageSize={25} onChange={() => {}} />,
    );
    expect(
      screen.getByRole("button", { name: "Page 2" }).getAttribute("aria-current"),
    ).toBe("page");
  });

  it("disables Prev on the first page", () => {
    render(
      <TablePagination page={1} total={60} pageSize={25} onChange={() => {}} />,
    );
    expect(
      screen.getByRole("button", { name: "Previous page" }),
    ).toHaveProperty("disabled", true);
  });

  it("fires onChange with the page number when a page button is clicked", () => {
    const onChange = vi.fn();
    render(
      <TablePagination page={1} total={60} pageSize={25} onChange={onChange} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Page 3" }));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("shows first 3 pages + ellipsis + last page when totalPages > 3", () => {
    render(
      <TablePagination
        page={1}
        total={250}
        pageSize={25}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("button", { name: "Page 1" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Page 2" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Page 3" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Page 4" })).toBeNull();
    expect(screen.getByRole("button", { name: "Page 10" })).toBeTruthy();
  });

  it("uses custom formatLabel when provided", () => {
    render(
      <TablePagination
        page={1}
        total={60}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t} comptes`}
      />,
    );
    expect(screen.getByText("1–25 sur 60 comptes")).toBeTruthy();
  });

  it("renders as a nav landmark with a default aria-label", () => {
    render(
      <TablePagination page={1} total={60} pageSize={25} onChange={() => {}} />,
    );
    const nav = screen.getByRole("navigation");
    expect(nav.tagName).toBe("NAV");
    expect(nav.getAttribute("aria-label")).toBe("Pagination");
  });

  it("uses a consumer-provided aria-label", () => {
    render(
      <TablePagination
        page={1}
        total={60}
        pageSize={25}
        onChange={() => {}}
        aria-label="Accounts pagination"
      />,
    );
    expect(
      screen.getByRole("navigation", { name: "Accounts pagination" }),
    ).toBeTruthy();
  });
});
