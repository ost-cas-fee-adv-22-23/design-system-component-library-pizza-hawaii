import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColorSchemeActiveButtonMap, ActiveButton as Component } from './ActiveButton';

export default {
	/* ActiveButton👇
	 * The Usecase of this Button is to have one-clicked activate something Functionality
	 *
	 */
	title: 'Components/Molecules/ActiveButton',
	component: Component,
	argTypes: {
		colorScheme: {
			options: Object.keys(ColorSchemeActiveButtonMap),
			control: { type: 'select' },
			description: 'The usecase of this Button is to have one-clicked activate something functionality',
		},
		alt: { control: 'text' },
		src: { control: 'text' },
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
