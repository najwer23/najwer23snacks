import type { StoryObj } from '@storybook/react';

import { Select as SnackSelect } from '.';

const meta = {
  title: 'Inputs/Select',
  component: SnackSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    name: 'mylabel',
    label: 'Label',
    validatorOptions: [{ type: 'empty' }],
    selectOptions: ['Option1', 'Option2'],
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};
