import React from 'react';

import { IconNames } from "../Icon/IconLib";
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Components/Button",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: "select" },
		},
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

const Buttons = ["s", "m", "l", "round"].reduce((acc, size) => {
	const Btn = Template.bind({});
	Btn.args = {
		size: size,
		label: `Button ${size}`,
	};
	acc[size] = Btn;
	return acc;
}, {});

export const Small = Buttons["s"];
export const Medium = Buttons["m"];
export const Large = Buttons["l"];
export const Round = Buttons["round"];

