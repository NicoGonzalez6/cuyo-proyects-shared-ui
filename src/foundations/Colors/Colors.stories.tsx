import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Colors } from "./Colors";

const meta: Meta<typeof Colors> = {
  title: "Foundations / Cuyo Craft  / Colors Foundations",
  component: Colors as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Foundation Colors",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorsComponent: Story = {
  name: "Colors Component",
};
