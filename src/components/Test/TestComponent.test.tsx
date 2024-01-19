// TestComponent.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { TestComponent } from "./Test";

describe("TestComponent", () => {
  const renderComponent = ({ children }: { children: string }) =>
    render(<TestComponent>{children}</TestComponent>);

  it("should render the component", () => {
    const headingText = "Some test heading";

    const { getByTestId } = renderComponent({
      children: headingText,
    });
    const testComponent = getByTestId("TestComponent");

    expect(testComponent).toBeInTheDocument();
  });

  it("should render heading text correctly", () => {
    const headingText = "Some test heading";

    const { getByTestId } = renderComponent({
      children: headingText,
    });
    const testComponent = getByTestId("TestComponent");

    expect(testComponent).toHaveTextContent(headingText);
  });
});
