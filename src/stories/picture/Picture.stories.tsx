import type { StoryObj } from '@storybook/react';

import { Picture as PictureSnack } from '.';

const meta = {
  title: 'Picture/Picture',
  component: PictureSnack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Picture: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
  },
  decorators: [(Story) => <Story />],
};

export const PictureBorder: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    kind: 'border',
  },
  decorators: [(Story) => <Story />],
};

export const PictureBorderContainer: Story = {
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    kind: 'border',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
