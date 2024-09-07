import type { StoryObj } from '@storybook/react';

import { Marquee as MarqueeSnack } from './Marquee';

const meta = {
  title: 'Marquee/Marquee',
  component: MarqueeSnack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Marquee: Story = {
  args: {
    height: '200px',
    speed: '15s',
    children: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="https://picsum.photos/200/200" />
        ))}
        <img key={5} src="https://picsum.photos/400/200" />
        <img key={5} src="https://picsum.photos/600/200" />
        <img key={5} src="https://picsum.photos/100/200" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px' }}>
        <Story />
      </div>
    ),
  ],
};
