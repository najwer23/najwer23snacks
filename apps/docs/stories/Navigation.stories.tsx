import type { StoryObj } from '@storybook/react';
import { Navigation } from '@najwer23snacks/navigation';
import { TextBox } from '@najwer23snacks/textbox';

const meta = {
  title: 'Unknown/Navigation',
  component: Navigation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigationTitle: (
      <TextBox href={'/'} tag={'h3'}>
        Title for Menu
      </TextBox>
    ),
    navigationMobileAtWidth: 1000,
    navigationTop: (
      <>
        <TextBox tag={'h3'} href="/1">
          {' '}
          Link1{' '}
        </TextBox>
        <TextBox tag={'h3'} href="/2">
          {' '}
          Link2{' '}
        </TextBox>
        <TextBox tag={'h3'} href="/3">
          {' '}
          Link3{' '}
        </TextBox>
      </>
    ),
    navigationBottom: (
      <>
        <TextBox href="/1"> Link1 </TextBox>
        <TextBox href="/2"> Link2 </TextBox>
        <TextBox href="/3"> Link3 </TextBox>
        <TextBox href="/4"> Link3 </TextBox>
        <TextBox href="/5"> Link3 </TextBox>
        <TextBox href="/6"> Link3 </TextBox>
      </>
    ),
    hrColor1: 'green',
    navigationMobile: <>Halo</>,
  },
  decorators: [
    (Story, ctx) => {
      return (
        <div>
          <Story args={{ ...ctx.args }} />
        </div>
      );
    },
  ],
};
