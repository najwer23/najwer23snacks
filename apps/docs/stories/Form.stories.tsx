import type { StoryObj } from '@storybook/react';
import { Form as FormStory } from '@najwer23snacks/form';

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
              <label>Name:</label>
            </div>
            <input type="text" id="numberInput" name="name" className="error" />
          </div>
          <br />
          <div>
            <div>
              <label>Password:</label>
            </div>
            <input type="text" id="password" name="password" />
          </div>
          <br />
          <button type="submit">Submit</button>
          <p>Check console!</p>
        </FormStory>
      </>
    );
  },
};
