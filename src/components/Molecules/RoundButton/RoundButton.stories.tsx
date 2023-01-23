import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { RoundButton as Component, RoundButtonColorMap } from './RoundButton';

export default {
	title: 'Components/Molecules',

	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
		colorScheme: {
			control: { type: 'select' },
			options: Object.keys(RoundButtonColorMap),
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const RoundButton = Template.bind({});
RoundButton.args = {
	icon: 'edit',
	children: 'Button Round',
};
