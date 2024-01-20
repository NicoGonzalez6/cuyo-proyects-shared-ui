import React from "react";
import { render } from "@testing-library/react";

import CcBadge from "./CcBadge";
import { CcBadgeProps } from "./CcBadge.types";

describe("Test Component", () => {
  let props: CcBadgeProps;

  beforeEach(() => {
    props = {
      children: "bar",
    };
  });

  const renderComponent = () => render(<CcBadge {...props} />);

  it("should render foo text correctly", () => {
    props.children = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CcBadge");

    expect(component).toHaveTextContent("harvey was here");
  });
});
