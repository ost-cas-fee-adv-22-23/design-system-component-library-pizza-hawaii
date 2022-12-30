import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { Button as Component } from './Button';

export default {
	title: 'Component/Molecules/Button',

	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Medium = Template.bind({});
Medium.args = {
	size: 'M',
	children: 'Button Medium',
};

export const Large = Template.bind({});
Large.args = {
	size: 'L',
	children: 'Button Large',
};

export const Round = Template.bind({});
Round.args = {
	size: 'round',
	children: 'Button Round',
};
