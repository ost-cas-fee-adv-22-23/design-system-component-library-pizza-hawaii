import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Components/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

const Buttons = ["M", "L"].reduce((acc, size) => {
	const Btn = Template.bind({});
	Btn.args = {
		size: size,
		label: "Button",
	};
	acc[size] = Btn;
	return acc;
}, {});

export const Medium = Buttons['M'];
export const Large = Buttons['L'];

