import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CcTab } from "./CcTab";

const meta: Meta<typeof CcTab> = {
  title: "Components / CcTab  / CcTab ",
  component: CcTab as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "CcTab is a visual element in a user interface that acts as a switch to display related content.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CcTabsComponent: Story = {
  name: "CcTab Component",
  args: {
    label: "label",
    notification: true,
    notificationValue: 0,
    disabled: false,
    icon: "icon-bell",
    isActive: false,
    onClick: () => console.log("click"),
  },
};
