import React from 'react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { Button } from './Button';

export default {
	title: 'Example/Molecules/Button',

	component: Button,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
};

const Template = (args) => <Button {...args} />;

const Buttons = ['M', 'L', 'round'].reduce((acc, size) => {
	const Btn = Template.bind({});
	Btn.args = {
		size: size,
		label: `Button ${size}`,
	};
	acc[size] = Btn;
	return acc;
}, {});

export const Medium = Buttons['M'];
export const Large = Buttons['L'];
export const Round = Buttons['round'];
