import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CcBadge from "./CcBadge";

const meta: Meta<typeof CcBadge> = {
  title: "Components / CcBadge  / CcBadge ",
  component: CcBadge as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "CuyoCraft Badges, help highlight important information, such as notifications or new and unread messages. They’re primarily used for communicating secondary or additional information to text.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CcBadgeComponent: Story = {
  name: "CcBadge Component",
};
