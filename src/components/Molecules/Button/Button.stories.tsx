import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { Button as Component, ButtonSizeMap, ButtonColorMap } from './Button';

export default {
	title: 'Components/Molecules/Button',

	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
		size: {
			control: {
				type: 'radio',
				options: Object.keys(ButtonSizeMap),
			},
		},
		colorScheme: {
			control: { type: 'select' },
			options: Object.keys(ButtonColorMap),
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
