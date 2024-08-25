import type { StoryObj } from '@storybook/react';
import { Grid } from '@najwer23snacks/grid';

const meta = {
  title: 'Unknown/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const testText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const GridLayoutContainer600: Story = {
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px',
    children: (
      <>
        <div>max-width: 1200px</div>
        <div>Padding: 0 10px 0 10px;</div>
      </>
    ),
  },
};

export const GridLayoutContainer1200: Story = {
  args: {
    layout: 'container',
    widthMax: 1200,
    padding: '0 10px 0 10px',
    children: (
      <>
        <div>max-width: 1200px</div>
        <div>Padding: 0 10px 0 10px;</div>
      </>
    ),
  },
};

export const GridLayoutContainer1400: Story = {
  args: {
    layout: 'container',
    widthMax: 1400,
    padding: '0 10px 0 10px',
    children: (
      <>
        <div>max-width: 1400px</div>
        <div>Padding: 0 10px 0 10px;</div>
      </>
    ),
  },
};

export const GridLayoutContainer1920: Story = {
  args: {
    layout: 'container',
    children: (
      <>
        <div>max-width: 1920px</div>
        <div>Padding: 0</div>
      </>
    ),
  },
};

export const GridLayoutContainerMargin: Story = {
  args: {
    layout: 'container',
    margin: '100px',
    children: (
      <>
        <div>max-width: 1920px</div>
        <div>Margin: 100px;</div>
      </>
    ),
  },
};

export const GridLayoutColumns: Story = {
  args: {
    layout: 'columns',
    gap: { col: '20px', row: '20px' },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2,
    },
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i}>
          <div>{testText}</div>
        </div>
      ))}
    </Grid>
  ),
};

export const GridLayoutMixed: Story = {
  args: {
    layout: 'columns',
    gap: { col: '20px', row: '20px' },
    col: {
      smallDesktop: 2,
      desktop: 2,
      mobile: 1,
      tablet: 2,
    },
  },
  render: (args) => {
    return (
      <>
        <Grid layout="container" widthMax={800} padding="0 10px 0 10px">
          <Grid {...args}>
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i}>
                <div>{testText}</div>
              </div>
            ))}
          </Grid>
        </Grid>
      </>
    );
  },
};
