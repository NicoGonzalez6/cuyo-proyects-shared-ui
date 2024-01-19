import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { CcButton } from "./CcButton";
import { CcButtonProps } from "./CcButton.types";

describe("Tests CcButtonComponent", () => {
  let props: CcButtonProps;

  beforeEach(() => {
    props = {
      children: "children button",
    };
  });

  it("Should render CcButton component", () => {
    render(<CcButton {...props} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(props.children as string);
  });

  it("Should render CcButton sm size correctly", () => {
    render(<CcButton {...props} buttonSize="sm" />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("cc-px-4 cc-py-2 cc-text-sm");
  });

  it("Should render CcButton md size correctly", () => {
    render(<CcButton {...props} buttonSize="md" />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("cc-px-5 cc-py-3 cc-text-base");
  });

  it("Should render CcButton lg size correctly", () => {
    render(<CcButton {...props} buttonSize="lg" />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("cc-px-6 cc-py-4 cc-text-lg");
  });

  it("Should call onClick event correctly", () => {
    const onClick = jest.fn();

    render(<CcButton onClick={onClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Should be disabled if the disable prop is passed as true and should have the disabled filled color", () => {
    const onClick = jest.fn();
    render(
      <CcButton onClick={onClick} disabled buttonType="filled-disabled" />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(button).toHaveClass("cc-bg-neutral-300");
  });

  it("Should render the primary color button", () => {
    render(<CcButton buttonType="filled-primary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("cc-bg-primary-500");
  });
});
