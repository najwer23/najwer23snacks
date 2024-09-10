import type { StoryObj } from '@storybook/react';

import { Calendar as CalendarSnack } from '.';

const meta = {
  title: 'Inputs/Calendar',
  component: CalendarSnack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
  args: {
    name: 'date',
    label: 'Date',
    validatorOptions: [{ type: 'empty' }, { type: 'date' }],
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};
