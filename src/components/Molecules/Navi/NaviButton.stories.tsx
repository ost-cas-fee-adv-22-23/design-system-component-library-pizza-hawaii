import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { NaviButton as Component } from './NaviButton';

export default {
	title: 'Components/Molecules/Navi',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const NaviButton = Template.bind({});

NaviButton.args = {
	href: '/',
	icon: 'settings',
	title: 'Settings',
	children: 'Settings',
};
