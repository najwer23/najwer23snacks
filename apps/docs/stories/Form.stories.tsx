import type { StoryObj } from '@storybook/react';
import { Form as FormStory } from '@najwer23snacks/form';
import { Button } from '@najwer23snacks/button';
import { Input } from '@najwer23snacks/input';

const meta = {
  title: 'Form/Form',
  component: FormStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    onSubmit: () => {},
    children: <></>,
  },
  render: () => {
    const handleOnSubmit = (formData: Record<string, object>) => {
      console.log('Form:', formData);
    };

    return (
      <>
        <FormStory onSubmit={handleOnSubmit}>
          <Input
            label="Email"
            type="text"
            name="name"
            validatorOptions={{
              empty: true,
              email: true,
            }}
          />

          <Input label="Password" type="password" name="pass" />

          <Button type="submit">Submit</Button>
        </FormStory>
      </>
    );
  },
};
