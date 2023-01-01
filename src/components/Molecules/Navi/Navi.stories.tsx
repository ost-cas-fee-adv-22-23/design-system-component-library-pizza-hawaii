import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { Navi as Component } from './Navi';
import { NaviButton } from './NaviButton';

export default {
	title: 'Component/Molecules/Navi',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Navi {...args} />;

export const Navi = Template.bind({});

Navi.args = {
	children: (
		<>
			<NaviButton as="a" href="/" icon="settings">
				Settings
			</NaviButton>
			<NaviButton as="a" href="/" icon="settings">
				Settings
			</NaviButton>
			<NaviButton as="a" href="/" icon="settings">
				Settings
			</NaviButton>
		</>
	),
};
