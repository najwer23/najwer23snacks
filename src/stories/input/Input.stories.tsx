import type { StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    name: 'test',
    label: 'Label',
    placeholder: 'Input',
    validatorOptions: [{ type: 'empty' }],
  },
};

export const InputTextarea: Story = {
  args: {
    placeholder: 'Placeholder',
    name: 'test',
    label: 'Label',
    kind: 'textarea',
    validatorOptions: [{ type: 'empty' }],
  },
  decorators: [
    (Story, ctx) => {
      return (
        <div style={{ width: '500px' }}>
          <Story args={{ ...ctx.args }} />
        </div>
      );
    },
  ],
};
