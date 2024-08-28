import type { StoryObj } from '@storybook/react';
import { Input } from '@najwer23snacks/input';

const meta = {
  title: 'Unknown/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test',
    label: 'label',
    errorOptions: {
      empty: true,
      email: true,
    },
  },
};
