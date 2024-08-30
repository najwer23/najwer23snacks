import type { Preview } from "@storybook/react";
import "./Theme.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ["Intro", ["GettingStarted", "CSSvariables"], "*"],
			},
		},
	},
};

export default preview;
