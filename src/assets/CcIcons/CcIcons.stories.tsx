import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CcIcons } from "./CcIcons";

const meta: Meta<typeof CcIcons> = {
  title: "Assets / Icons ",
  component: CcIcons as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Cuyo Craft Shared Assets [[Shared Assets Repository](https://github.com/NicoGonzalez6/cuyo-proyects-shared-assets)].",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CcBadgeComponent: Story = {
  name: "Icons",
};
