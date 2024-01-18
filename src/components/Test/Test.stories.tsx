import type { Meta, StoryObj } from "@storybook/react";

import { TestComponent } from "./Test";

const meta: Meta<typeof TestComponent> = {
  title: "Components/ Tests / Test Component",
  component: TestComponent as React.FC,
  parameters: {
    docs: {
      description: {
        component: `Test component example`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  name: "Test Component",
  args: {
    children: "this is an example component",
  },
};
