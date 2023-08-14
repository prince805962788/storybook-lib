import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/packages';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'main'],
    },
  },
  render: (args) => <Button {...args}>Template</Button>,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    type: 'default',
  },
};
