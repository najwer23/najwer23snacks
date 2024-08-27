import type { StoryObj } from '@storybook/react';
import { Form as FormStory } from '@najwer23snacks/form';
import { TextBox } from '@najwer23snacks/textbox';
import { Button } from '@najwer23snacks/button';

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
          <div>
            <div>
              <label>
                <TextBox>Input with Error</TextBox>
              </label>
            </div>
            <input type="text" id="numberInput" name="name" className="error" />
          </div>
          <br />
          <div>
            <div>
              <label>
                <TextBox>Input</TextBox>
              </label>
            </div>
            <input type="text" id="password" name="password" />
          </div>
          <br />
          <Button type="submit">Submit</Button>
          <TextBox>Check console!</TextBox>
        </FormStory>
      </>
    );
  },
};
