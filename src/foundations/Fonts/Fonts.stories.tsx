import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Fonts } from "./Fonts";

const meta: Meta<typeof Fonts> = {
  title: "Foundations / Cuyo Craft  / Fonts Foundations",
  component: Fonts as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Foundation fonts sizes",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontsComponent: Story = {
  name: "Colors Component",
};
