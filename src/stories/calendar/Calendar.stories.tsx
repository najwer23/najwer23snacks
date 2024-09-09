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
    name: 'mylabel',
    label: 'Label',
    validatorOptions: [{ type: 'empty'}, {type: "email" }]
  },
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};
