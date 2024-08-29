import type { StoryObj } from '@storybook/react';
import { Navigation } from '@najwer23snacks/navigation';

const meta = {
  title: 'Unknown/Navigation',
  component: Navigation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: <>Title for Menu</>,
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
