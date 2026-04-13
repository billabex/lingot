import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Pagination } from "./index";

afterEach(cleanup);

describe("Pagination", () => {
  it("renders the default range label", () => {
    render(
      <Pagination page={1} total={30} pageSize={25} onChange={() => {}} />
    );
    expect(screen.getByText("1–25 of 30")).toBeTruthy();
  });

  it("uses custom formatLabel when provided", () => {
    render(
      <Pagination
        page={1}
        total={30}
        pageSize={25}
        onChange={() => {}}
        formatLabel={(s, e, t) => `${s}–${e} sur ${t}`}
      />
    );
    expect(screen.getByText("1–25 sur 30")).toBeTruthy();
  });

  it("disables Prev on the first page", () => {
    render(
      <Pagination page={1} total={30} pageSize={25} onChange={() => {}} />
    );
    const prev = screen.getByRole("button", { name: "Previous page" });
    expect(prev).toHaveProperty("disabled", true);
  });

  it("disables Next on the last page", () => {
    render(
      <Pagination page={2} total={30} pageSize={25} onChange={() => {}} />
    );
    const next = screen.getByRole("button", { name: "Next page" });
    expect(next).toHaveProperty("disabled", true);
  });

  it("fires onChange with the next page", () => {
    const onChange = vi.fn();
    render(
      <Pagination page={1} total={120} pageSize={25} onChange={onChange} />
    );
    fireEvent.click(screen.getByRole("button", { name: "Next page" }));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("fires onChange with the previous page", () => {
    const onChange = vi.fn();
    render(
      <Pagination page={3} total={120} pageSize={25} onChange={onChange} />
    );
    fireEvent.click(screen.getByRole("button", { name: "Previous page" }));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("clamps current page within bounds", () => {
    render(
      <Pagination page={99} total={30} pageSize={25} onChange={() => {}} />
    );
    expect(screen.getByText("26–30 of 30")).toBeTruthy();
  });

  it("renders 0-of-0 when total is zero", () => {
    render(
      <Pagination page={1} total={0} pageSize={25} onChange={() => {}} />
    );
    expect(screen.getByText("0–0 of 0")).toBeTruthy();
  });
});
