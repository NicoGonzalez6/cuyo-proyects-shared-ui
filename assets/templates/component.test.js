module.exports = (componentName) => ({
  content: `
import React from "react";
import { render, screen } from "@testing-library/react";

import {${componentName}} from "./${componentName}";
import {${componentName}Props} from "./${componentName}.types";

describe("Test ${componentName}", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      children: "bar"
    };
  });


  it("should render the ${componentName} component correctly", () => {
    props.children = "harvey was here";
    render(<${componentName} {...props} />);
    const button = screen.getByTestId("${componentName}");
    expect(button).toHaveTextContent(props.children as string);
  });
});
`,
  extension: `.test.tsx`,
});
