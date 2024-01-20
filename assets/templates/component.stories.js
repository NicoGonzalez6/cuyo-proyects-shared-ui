module.exports = (componentName) => ({
  content: `
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./${componentName}";

const meta: Meta<typeof ${componentName} > = {
  title: "Components / ${componentName}  / ${componentName} ",
  component: ${componentName} as React.FC,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'Component description',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ${componentName}Component: Story = {
  name: "${componentName} Component",
 };

`,
  extension: `.stories.tsx`,
});
