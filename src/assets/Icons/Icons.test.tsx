import React from "react";
import { render, screen } from "@testing-library/react";
import { Icons } from "./Icons";

describe("Test CcIcon Component", () => {
  it("should render CcBadge correctly", () => {
    render(<Icons />);
    const badge = screen.getByTestId("CcIcons");
    expect(badge).toBeInTheDocument();
  });
});
