import React from "react";
import { render, screen } from "@testing-library/react";

import { CcTextField } from "./CcTextField";
import { CCTextFieldProps } from "./CcTextField.types";

describe("Test CCTextField", () => {
  let props: CCTextFieldProps;

  it("should render the CCTextField component correctly", () => {
    render(<CcTextField {...props} />);
    const input = screen.getByTestId("CCTextField");
    expect(input).toBeInTheDocument();
  });

  it("should render the CCTextFieldLabel orrectly", () => {
    const labelContent = "this a label";
    render(<CcTextField {...props} label={labelContent} />);
    const label = screen.getByTestId("CCTextFieldLabel");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelContent);
  });

  it("should render the CCTextField error styles correctly", () => {
    const errorMessage = "this a error text";
    render(<CcTextField {...props} error errorMessage={errorMessage} />);
    const input = screen.getByTestId("CCTextFieldInput");
    const errorlabel = screen.getByTestId("CCTextFieldErrorLabel");
    const errorIcon = screen.getByTestId("CCTextFieldIcon");
    expect(input).toHaveClass("cc-border cc-border-error-200");
    expect(errorlabel).toBeInTheDocument();
    expect(errorIcon).toBeInTheDocument();
  });

  it("should render the CCTextField success styles correctly", () => {
    const successMessage = "this a success text";
    render(<CcTextField {...props} success successText={successMessage} />);
    const input = screen.getByTestId("CCTextFieldInput");
    const successLabel = screen.getByTestId("CCTextFieldSuccessLabel");
    const successIcon = screen.getByTestId("CCTextFieldIcon");
    expect(input).toHaveClass("cc-border cc-border-success-200");
    expect(successLabel).toBeInTheDocument();
    expect(successIcon).toBeInTheDocument();
  });

  it("should render the CCTextField disable styles correctly", () => {
    render(<CcTextField {...props} disabled />);
    const input = screen.getByTestId("CCTextFieldInput");
    expect(input).toHaveClass("cc-bg-neutral-100 cc-text-neutral-400");
    expect(input).toBeDisabled();
    expect(input).toBeInTheDocument();
  });

  it("should render the CCTextField disable styles correctly", () => {
    const helperTextMessage = "this a error text";
    render(<CcTextField {...props} helperText={helperTextMessage} />);
    const helperText = screen.getByTestId("CCTextFieldHelperText");

    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(helperTextMessage);
  });
});
