import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switch as Component } from './Switch';

export default {
	title: 'Component/Molecules/Switch',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Switch = Template.bind({});
Switch.args = {
	value: 'likes',
	name: 'switch',
	options: [
		{
			label: 'Meine Mumbles',
			value: 'mumbles',
		},
		{
			label: 'Meine Likes',
			value: 'likes',
		},
	],
};
