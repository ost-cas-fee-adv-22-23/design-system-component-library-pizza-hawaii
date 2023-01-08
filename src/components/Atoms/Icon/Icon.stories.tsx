import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon as Component } from './Icon';
import { IconNames } from './IconLib';

export default {
	title: 'Component/Atoms/Icon',
	component: Component,
	argTypes: {
		name: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Icon = Template.bind({});
Icon.args = {
	name: 'mumble',
};
