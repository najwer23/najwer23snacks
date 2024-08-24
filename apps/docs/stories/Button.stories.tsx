import type { StoryObj } from '@storybook/react';
import { Button } from '@najwer23snacks/button';

const meta = {
  title: 'Buttons/Button Classic',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click!',
    disabled: false,
    onClick: () => {
      console.log('Hello Click!');
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click!',
    disabled: true,
    onClick: () => {
      console.log('Hello Click!');
    },
  },
};
