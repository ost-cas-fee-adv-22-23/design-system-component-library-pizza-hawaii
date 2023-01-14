import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navi as Component } from './Navi';
import { NaviButton } from './NaviButton';

export default {
	title: 'Components/Molecules/Navi',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Navi = Template.bind({});

Navi.args = {
	children: (
		<>
			<NaviButton as="a" href="/" icon="settings" title="Settings">
				Settings
			</NaviButton>
			<NaviButton as="a" href="/" icon="settings" title="Settings">
				Settings
			</NaviButton>
			<NaviButton as="a" href="/" icon="settings" title="Settings">
				Settings
			</NaviButton>
		</>
	),
};
