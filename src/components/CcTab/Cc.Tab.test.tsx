import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { CCTabProps } from "./CcTab.types";
import { CcTab } from "./CcTab";

describe("Test CcTabs", () => {
  let props: CCTabProps;

  beforeAll(() => {
    props = {
      label: "label",
    };
  });

  it("should render the CcTab component correctly", () => {
    render(<CcTab {...props} />);
    const tab = screen.getByTestId("CcTab");
    expect(tab).toBeInTheDocument();
  });

  it("should contain label text when passed on props", () => {
    render(<CcTab {...props} />);
    const tab = screen.getByTestId("CcTab");
    expect(tab).toHaveTextContent(props.label);
  });

  it("should contain notification text when passed on props", () => {
    const notificationValue = 2;
    render(
      <CcTab {...props} notification notificationValue={notificationValue} />
    );
    const notification = screen.getByTestId("CcTabNotification");

    expect(notification).toHaveTextContent(notificationValue.toString());
  });

  it("should be disable onClick if disable prop is true", () => {
    const clickEvent = jest.fn();
    render(<CcTab {...props} disabled onClick={clickEvent} />);
    const tab = screen.getByTestId("CcTab");
    fireEvent.click(tab);
    expect(clickEvent).toBeCalledTimes(0);
  });

  it("should have disable styles if disable prop is true", () => {
    render(<CcTab {...props} disabled />);
    const tab = screen.getByTestId("CcTab");
    expect(tab).toHaveClass(
      "cc-text-neutral-300 after:cc-bg-neutral-300 after:cc-h-[2px] after:!cc-w-full"
    );
  });

  it("should trigger onClick event when clicked", () => {
    const clickEvent = jest.fn();
    render(<CcTab {...props} onClick={clickEvent} />);
    const tab = screen.getByTestId("CcTab");
    fireEvent.click(tab);
    expect(clickEvent).toBeCalledTimes(1);
  });

  it("should have active styles if isActive is true", () => {
    render(<CcTab {...props} isActive />);
    const tab = screen.getByTestId("CcTab");
    expect(tab).toHaveClass(
      "cc-text-primary-500 after:cc-bg-primary-400 after:cc-h-[2px] after:!cc-w-full"
    );
  });

  it("should have hover styles if isActive is not true", () => {
    render(<CcTab {...props} />);
    const tab = screen.getByTestId("CcTab");
    expect(tab).toHaveClass(
      "cc-text-neutral-700 after:cc-bg-primary-400 after:cc-h-[2px] hover:after:!cc-w-full"
    );
  });
});
