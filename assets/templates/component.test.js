module.exports = (componentName) => ({
  content: `
import React from "react";
import { render, screen } from "@testing-library/react";

import {${componentName}} from "./${componentName}";
import {${componentName}Props} from "./${componentName}.types";

describe("Test ${componentName}", () => {
  let props: ${componentName}Props;

  it("should render the ${componentName} component correctly", () => {

    render(<${componentName} {...props} />);
    const component = screen.getByTestId("${componentName}");
    expect(component).toBeInTheDocument();
  });
});
`,
  extension: `.test.tsx`,
});
