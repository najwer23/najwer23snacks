import type { StoryObj } from '@storybook/react';

import { Grid } from './Grid';

const meta = {
  title: 'Grid/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: {
      col: '20px',
      row: '20px',
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 3,
      tablet: 3,
    },
    children: (
      <>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        ))}
      </>
    ),
  },
};

export const GridDynamicColumnsBasedOnWidth: Story = {
  args: {
    gap: {
      col: '0px',
      row: '20px',
    },
    col: {
      smallDesktop: 4,
      desktop: 5,
      mobile: 1,
      tablet: 3,
    },
    children: (
      <>
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        ))}
      </>
    ),
  },
};

export const GridDynamicColumnsWithImgsBasedOnWidth: Story = {
  args: {
    gap: {
      col: '20px',
      row: '20px',
    },
    col: {
      smallDesktop: 4,
      desktop: 5,
      mobile: 1,
      tablet: 3,
    },
    children: (
      <>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i}>
            {' '}
            <img
              style={{ width: '100%', aspectRatio: 1, height: 'auto' }}
              src="https://picsum.photos/500/500"
              height="500"
              width="500"
              alt=""
            />{' '}
          </div>
        ))}
      </>
    ),
  },
};
