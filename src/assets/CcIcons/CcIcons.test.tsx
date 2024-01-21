import React from "react";
import { render, screen } from "@testing-library/react";
import { CcIcons } from "./CcIcons";

describe("Test CcIcon Component", () => {
  it("should render CcBadge correctly", () => {
    render(<CcIcons />);
    const badge = screen.getByTestId("CcIcons");
    expect(badge).toBeInTheDocument();
  });
});
