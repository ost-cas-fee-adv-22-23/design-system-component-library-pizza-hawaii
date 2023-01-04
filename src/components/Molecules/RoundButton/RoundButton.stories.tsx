import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { RoundButton as Component } from './RoundButton';

export default {
	title: 'Component/Molecules/RoundButton',

	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const RoundButton = Template.bind({});
RoundButton.args = {
	icon: 'edit',
	children: 'Button Round',
};
