import type { StoryObj } from '@storybook/react';

import { Select } from ".";
import { Input } from '../input';

const meta = {
	title: "Inputs/Select",
	component: Select,
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
		label: "Label",
		placeholder: "Placeholder",
		onChange: (e) => console.log(e.target.value),
		list: [
			{
				value: "1",
				text: "1"
			},
			{
				value: "2",
				text: "2 g g  g g gg g g g g g  g g g g g g g g "
			},
			{
				value: "3",
				text: "3"
			},
			{
				value: "4",
				text: "4"
			},
			{
				value: "5",
				text: "5"
			}
		]
	},
	decorators: [
		(Story) => <>
			<Story />
		</>
	]
};

