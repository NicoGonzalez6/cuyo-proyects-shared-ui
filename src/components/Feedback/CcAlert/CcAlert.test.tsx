import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { CcAlert } from "./CcAlert";
import { CcAlertProps } from "./CcAlert.types";

describe("Test CcAlert", () => {
  let props: CcAlertProps;

  it("should render the CcAlert component correctly", () => {
    render(<CcAlert {...props} />);
    const alert = screen.getByTestId("CcAlert");
    expect(alert).toBeInTheDocument();
  });

  it("should render the title and text passed as props", () => {
    const title = "Title Example";
    const text = "Text example";
    render(<CcAlert {...props} text={text} title={title} />);

    const alert = screen.getByTestId("CcAlert");

    expect(alert).toHaveTextContent(title);
    expect(alert).toHaveTextContent(text);
  });

  it("should call onClose and onConfirm when clicked", () => {
    const onConfirm = jest.fn();
    const onClose = jest.fn();
    render(<CcAlert {...props} onConfirm={onConfirm} onClose={onClose} />);

    const confirmButton = screen.getByTestId("CcButton");
    const closeButton = screen.getByTestId("CcAlertClose");

    fireEvent.click(confirmButton);
    fireEvent.click(closeButton);

    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should render the CcAlert information type", () => {
    render(<CcAlert {...props} type="information" />);
    const alert = screen.getByTestId("CcAlert");
    expect(alert).toHaveClass("after:cc-bg-secondary-500");
  });

  it("should render the CcAlert error type", () => {
    render(<CcAlert {...props} type="error" />);
    const alert = screen.getByTestId("CcAlert");
    expect(alert).toHaveClass("after:cc-bg-error-500");
  });

  it("should render the CcAlert warning type", () => {
    render(<CcAlert {...props} type="warning" />);
    const alert = screen.getByTestId("CcAlert");
    expect(alert).toHaveClass("after:cc-bg-warning-500");
  });

  it("should render the CcAlert success type", () => {
    render(<CcAlert {...props} type="success" />);
    const alert = screen.getByTestId("CcAlert");
    expect(alert).toHaveClass("after:cc-bg-success-500");
  });
});
