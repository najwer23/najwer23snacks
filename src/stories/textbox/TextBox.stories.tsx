import type { StoryObj } from '@storybook/react';
import { TextBox } from '.';

const meta = {
  title: 'Text/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const testText = 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.';

export const All: Story = {
  args: {
    children: testText,
  },
  decorators: [
    (Story) => {
      return (
        <>
          <TextBox tag={'h1'}> {testText} </TextBox>
          <TextBox tag={'h2'}> {testText} </TextBox>
          <TextBox tag={'h3'}> {testText} </TextBox>
          <Story />
          <TextBox tag={'p'} href={'https://www.example.com'}>
            {testText}
          </TextBox>
        </>
      );
    },
  ],
};

export const H1: Story = {
  args: {
    tag: 'h1',
    children: testText,
  },
};

export const H2: Story = {
  args: {
    tag: 'h2',
    children: testText,
  },
};

export const H3: Story = {
  args: {
    tag: 'h3',
    children: testText,
  },
};

export const Paragraph: Story = {
  args: {
    children: testText,
  },
};

export const LinkH1: Story = {
  args: {
    tag: 'h1',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText,
  },
};

export const LinkH2: Story = {
  args: {
    tag: 'h2',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText,
  },
};

export const LinkH3: Story = {
  args: {
    tag: 'h3',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText,
  },
};

export const LinkParagraph: Story = {
  args: {
    tag: 'p',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText,
  },
};
