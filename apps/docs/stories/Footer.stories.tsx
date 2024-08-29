import type { StoryObj } from '@storybook/react';
import { Footer as Foot } from '@najwer23snacks/footer';

const meta = {
  title: 'Footer/Footer',
  component: Foot,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {
    footerWidthMax: 1000,
  },
};
