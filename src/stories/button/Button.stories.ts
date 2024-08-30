import type { StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: "Buttons/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "Button",
		type: "button",
		ariaLabel: "button-click"
	},
};

export const ButtonDisabled: Story = {
	args: {
		text: "Button",
		type: "button",
		disabled: true,
		ariaLabel: "button-click"
	},
};

export const ButtonReset: Story = {
	args: {
		text: "Button",
		type: "reset",
		disabled: false,
		ariaLabel: "button-click",
	},
};

