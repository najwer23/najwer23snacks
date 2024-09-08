import type { StoryObj } from '@storybook/react';

import { TextBox } from '../textbox';
import { Footer as FooterSnack } from '.';

const meta = {
  title: 'Footer/Footer',
  component: FooterSnack,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {
    footerWidthMax: 1400,
  },
};
