import type { StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
	title: "Inputs/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "mylabel",
		type: "text",
		label: "Label",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
		},
	},
};

export const InputEmail: Story = {
	args: {
		name: "mylabel",
		type: "text",
		label: "Label",
		placeholder: "Placeholder",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
			email: true,
		},
	},
};

export const InputDefaultValue: Story = {
	args: {
		name: "mylabel",
		type: "text",
		label: "Label",
		defaultValue: "@najwer23",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
		},
	},
};

export const InputErrorInput: Story = {
	args: {
		name: "mylabel",
		type: "text",
		label: "Label - Error on blur",
		defaultValue: "",
		onBlur: (e, isError) => console.log(e.target.value, isError),
		errorOptions: {
			empty: true,
		},
	},
};


