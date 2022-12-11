import React from 'react';
import { Richtext } from "./Richtext";

export default {
	title: "Example/Atoms/Richtext",
	component: Richtext,
	argTypes: {
	},
};

const Template = (args) => <Richtext {...args} />;

const Buttons = ["M", "L"].reduce((acc, size) => {
	const RichtextTemplate = Template.bind({});
	RichtextTemplate.args = {
		size: size,
		children: `Richtext ${size}`,
	};
	acc[size] = RichtextTemplate;
	return acc;
}, {});

export const Medium = Buttons["M"];
export const Large = Buttons["L"];

