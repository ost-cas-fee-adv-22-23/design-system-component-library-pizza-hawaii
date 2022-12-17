import React from 'react';
import { Icon as Component } from './Icon';
import { default as IconLib, IconNames } from './IconLib';

export default {
	title: 'Example/Atoms/Icon',
	component: Component,
	argTypes: {
		name: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
};

const Template = (args) => <Component {...args} />;

export const Icon = Template.bind({});
Icon.args = {
	name: 'mumble',
};
