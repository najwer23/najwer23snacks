import type { StoryObj } from '@storybook/react';

import { MenuMobile } from "." ;
import { MenuTypes } from '../menu/Menu.types';

const meta = {
	title: "najwer23.github.io/MenuMobile",
	component: MenuMobile,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const MENU_MOBILE: MenuTypes = {
	menuItems: [
		[
			{
				menuTitle: "Menu",
				items: [
					{
						itemLink: "#",
						itemLinkText: "Test",
						itemLinkType: "hash",
					},
					{
						itemLink: "",
						itemLinkText: "Home",
						itemLinkType: "hash",
					},
				],
			},
			{
				menuTitle: "Projects",
				items: [
					{
						itemLink: "https://leetcode.com/najwer23/",
						itemLinkText: "Leetcode",
						itemLinkType: "linkOut",
					},
					{
						itemLink: "https://najwer23.github.io/react-redux-ts/",
						itemLinkText: "Geometric figures",
						itemLinkType: "linkOut",
					},
				],
			},
		],
	],
};

export const Default: Story = {
	args: {
		...MENU_MOBILE,
	},
};

