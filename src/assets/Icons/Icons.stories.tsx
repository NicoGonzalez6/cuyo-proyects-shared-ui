import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icons } from "./Icons";

const meta: Meta<typeof Icons> = {
  title: "Assets / Icons ",
  component: Icons as React.FC,
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
