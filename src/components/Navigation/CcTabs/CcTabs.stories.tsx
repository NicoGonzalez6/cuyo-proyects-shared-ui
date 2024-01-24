import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CcTabs } from "./CcTabs";

const meta: Meta<typeof CcTabs> = {
  title: "Components / Navigation  / CcTabs",
  component: CcTabs as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "CcTabs serve as a means of organizing interconnected content, enabling users to effortlessly switch between distinct groups of information housed within a shared context.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CcTabsComponent: Story = {
  name: "CcTabs Component",
  args: {
    onClick: (i) => console.log(i),
    tabs: [
      {
        label: "label",
        notification: true,
        notificationValue: 0,
        disabled: false,
        icon: "icon-bell",
        isActive: false,
      },
      {
        label: "label",
        notification: true,
        notificationValue: 1,
        disabled: false,
        icon: "icon-bin",
        isActive: true,
      },
      {
        label: "label",
        notification: true,
        notificationValue: 0,
        disabled: true,
      },
    ],
  },
};
