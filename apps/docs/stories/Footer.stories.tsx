import type { StoryObj } from '@storybook/react';
import { Footer } from '@najwer23snacks/footer';

const meta = {
  title: 'Unknown/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerWidthMax: 1000,
  },
};
