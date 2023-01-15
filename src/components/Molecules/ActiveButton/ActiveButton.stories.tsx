import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColorSchemeActiveButtonMap, ActiveButton as Component } from './ActiveButton';

export default {
	/* 👇 Does this comment have any outcome ? we do not know now..
	 *
	 */
	title: 'Components/Molecules/ActiveButton',
	component: Component,
	argTypes: {
		colorScheme: {
			options: Object.keys(ColorSchemeActiveButtonMap),
			control: { type: 'select' },
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
