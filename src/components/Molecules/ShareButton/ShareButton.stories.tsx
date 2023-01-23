import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShareButton as Component } from './ShareButton';
import { ColorSchemeMap } from '../InteractionButton/InteractionButton';
export default {
	title: 'Components/Molecules/ShareButton',
	component: Component,
	argTypes: {
		colorScheme: {
			options: Object.keys(ColorSchemeMap.default),
			control: { type: 'select' },
			description: 'The usecase of this Button is to have one-clicked activate something functionality',
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Share = Template.bind({});

Share.args = {
	colorScheme: 'slate',
	isActive: false,
	buttonInitialText: 'Copy Link',
	buttonActiveText: 'Link copied',
};
