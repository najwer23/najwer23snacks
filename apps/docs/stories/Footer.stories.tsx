import type { StoryObj } from '@storybook/react';
import { Footer as Foot } from '@najwer23snacks/footer';
import { TextBox } from '@najwer23snacks/textbox';

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
    children: <TextBox tag="p"> Mariusz Najwer, 2024 </TextBox>,
  },
};
