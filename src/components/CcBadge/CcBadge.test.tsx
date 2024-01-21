import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { CcBadge } from "./CcBadge";
import { CcBadgeProps } from "./CcBadge.types";

describe("Test Component", () => {
  let props: CcBadgeProps;

  beforeEach(() => {
    props = {
      children: "bar",
    };
  });

  it("should render CcBadge correctly", () => {
    props.children = "harvey was here";
    render(<CcBadge {...props} />);
    const badge = screen.getByTestId("CcBadge");
    expect(badge).toHaveTextContent(props.children as string);
  });

  it("should render CcBadge primary color filled variant correctly", () => {
    render(<CcBadge {...props} badgeType="primary" badgeVariant="filled" />);

    const badge = screen.getByTestId("CcBadge");

    expect(badge).toHaveClass("cc-bg-primary-500");
  });

  it("should render CcBadge primary color outlined variant correctly", () => {
    render(<CcBadge {...props} badgeType="primary" badgeVariant="outlined" />);

    const badge = screen.getByTestId("CcBadge");

    expect(badge).toHaveClass(
      "cc-bg-transparent cc-border cc-border-primary-600"
    );
  });

  it("should onClick event work correctly", () => {
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
