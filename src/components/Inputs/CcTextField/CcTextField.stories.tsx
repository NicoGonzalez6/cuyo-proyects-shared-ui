import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CcTextField } from "./CcTextField";

const meta: Meta<typeof CcTextField> = {
  title: "Components / Inputs  / CcTextField ",
  component: CcTextField as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "CcTextField allow users to enter information which can then be processed or used for various purposes by the system or application.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CcTextFieldComponent: Story = {
  name: "CcTextField Component",
  args: {
    label: "Label",
    helperText: "this is helper text",
    placeholder: "placeholder",
    success: false,
    successText: "Success Text",
    error: false,
    errorMessage: "Error Text",
    disabled: false,
    id: "id",
    name: "name",
    onBlur: () => console.log("blur"),
    onChange: () => console.log("on change"),
    value: "",
  },
};
