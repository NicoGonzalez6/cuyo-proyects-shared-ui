import React from "react";
import { CcButton } from "./CcButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CcButton> = {
  title: "Components / CcButton / CcButton",
  component: CcButton as React.FC,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const button: Story = {
  name: "Button Component",
  args: {
    buttonSize: "sm",
    buttonType: "filled-primary",
    children: "this is an example component",
  },
};
