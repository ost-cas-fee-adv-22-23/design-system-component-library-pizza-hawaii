import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ColorSchemeMap, InteractionButton as Component } from './InteractionButton';

export default {
	/* 👇 Does this comment have any outcome ? we do not know now..
	 *
	 */
	title: 'Components/Molecules/InteractionButton',
	component: Component,
	argTypes: {
		count: {
			control: { type: 'number', min: 0, max: 2000 },
		},
		colorScheme: {
			options: Object.keys(ColorSchemeMap),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Like = Template.bind({});
export const Comment = Template.bind({});

Like.args = {
	count: 0,
	colorScheme: 'pink',
	buttonTextSingular: 'Like',
	buttonTextPlural: 'Likes',
	iconNameSingle: 'heart_fillable',
	iconNamePlural: 'heart_filled'
};

Comment.args = {
	count: 0,
	colorScheme: 'violet',
	buttonTextSingular: 'Comment',
	buttonTextPlural: 'Comments',
	iconNameSingle: 'comment_fillable',
	iconNamePlural: 'comment_filled',
};
