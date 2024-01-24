import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { CcBadge } from "./CcBadge";
import { CcBadgeProps } from "./CcBadge.types";

describe("Test CcBadgeComponent", () => {
  let props: CcBadgeProps;

  beforeEach(() => {
    props = {
      children: "bar",
    };
  });

  it("Should render CcBadge correctly", () => {
    props.children = "harvey was here";
    render(<CcBadge {...props} />);
    const badge = screen.getByTestId("CcBadge");
    expect(badge).toBeInTheDocument();
  });

  it("Should render CcBadge primary color filled variant correctly", () => {
    render(<CcBadge {...props} badgeType="primary" badgeVariant="filled" />);

    const badge = screen.getByTestId("CcBadge");

    expect(badge).toHaveClass("cc-bg-primary-500");
  });

  it("Should render CcBadge primary color outlined variant correctly", () => {
    render(<CcBadge {...props} badgeType="primary" badgeVariant="outlined" />);

    const badge = screen.getByTestId("CcBadge");

    expect(badge).toHaveClass(
      "cc-bg-transparent cc-border cc-border-primary-600"
    );
  });

  it("Should onClick event work correctly", () => {
    const onClick = jest.fn();

    render(
      <CcBadge
        {...props}
        badgeType="primary"
        badgeVariant="outlined"
        onClick={onClick}
      />
    );

    const badge = screen.getByTestId("CcBadge");

    fireEvent.click(badge);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
