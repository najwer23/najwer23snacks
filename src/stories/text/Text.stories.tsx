import type { StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
	title: "najwer23.github.io/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const testText = "It was Sam's first view of a battle of Men against Men, and he did not like it much. He was glad that he could not see the dead face. He wondered what the man's name was and where he came from; and if he was really evil of heart, or what lies or threats had led him on the long march from his home; and if he would rather have stayed there in peace."

export const TextH1: Story = {
	args: {
		kind: "h1",
		children: "Title! More title!"
	},
};

export const TextH2: Story = {
	args: {
		kind: "h2",
		children: "Title! More title! h2"
	},
};

export const TextH3: Story = {
	args: {
		kind: "h3",
		children: "Title! More title! h3"
	},
};

export const TextParagraph: Story = {
	args: {
		kind: "p",
		children: testText
	},
};

export const TextParagraphSmall: Story = {
	args: {
		kind: "pSmall",
		children: testText
	},
};

export const TextParagraphSmallBold: Story = {
	args: {
		kind: "pSmallBold",
		children: testText
	},
};

export const TextParagraphSubTitle: Story = {
	args: {
		kind: "pSubTitle",
		children: testText
	},
};


