import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switch as Component } from './Switch';

export default {
	title: 'Example/Molecules/Switch',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Variant1 = Template.bind({});
Variant1.args = {
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
