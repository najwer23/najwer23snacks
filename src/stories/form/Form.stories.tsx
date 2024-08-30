import type { StoryObj } from '@storybook/react';
import { Form as FormSnack } from '.';
import { Button } from '../button';
import { Input } from '../input';

const meta = {
  title: 'Form/Form',
  component: FormSnack,
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
        <FormSnack onSubmit={handleOnSubmit}>
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
        </FormSnack>
      </>
    );
  },
};