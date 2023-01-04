import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { ButtonRound as Component } from './ButtonRound';

export default {
	title: 'Component/Molecules/ButtonRound',

	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const ButtonRound = Template.bind({});
ButtonRound.args = {
	icon: 'edit',
	children: 'Button Round',
};
