import React from "react";
import { CcButton } from "./CcButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CcButton> = {
  title: "Components / Buttons / CcButton",
  component: CcButton as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `CuyoCraft Button, lets the user perform an action with a click.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const button: Story = {
  name: "Button Component",
  args: {
    buttonSize: "sm",
    buttonType: "primary",
    buttonVariant: "filled",
    disabled: false,
    fullWidth: false,
    children: "this is an example component",
  },
};
