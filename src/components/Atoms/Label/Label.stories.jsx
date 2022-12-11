import React from 'react';
import { Label } from './Label';

export default {
	title: "Example/Atoms/Label",
	component: Label,
	argTypes: {
	},
};

const Template = (args) => <Label {...args} />;

const Buttons = ["S", "M", "L", "XL"].reduce((acc, size) => {
	const LabelTemplate = Template.bind({});
	LabelTemplate.args = {
		size: size,
		children: `Label ${size}`,
	};
	acc[size] = LabelTemplate;
	return acc;
}, {});

export const Small = Buttons["S"];
export const Medium = Buttons["M"];
export const Large = Buttons["L"];
export const ExtraLarge = Buttons["XL"];

