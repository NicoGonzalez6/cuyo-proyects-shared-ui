import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CcAlert } from "./CcAlert";

const meta: Meta<typeof CcAlert> = {
  title: "Components / Feedback  / CcAlert ",
  component: CcAlert as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Ccalerts take over the top of an interface to show general notifications for the product or system, not a specific task. These alerts persist until they are dismissed by the user. These alerts can include a ghost button or link.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CcAlertComponent: Story = {
  name: "CcAlert Component",
  args: {
    text: `The alert & notifications component is designed to work with the
    actions buttons.`,
    title: "Here’s the alert info title",
    onClose: () => alert("close"),
    onConfirm: () => alert("confirm"),
    type: "information",
  },
};
