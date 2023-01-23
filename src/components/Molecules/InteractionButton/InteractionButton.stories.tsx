import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InteractionButtonColorSchemeMap, InteractionButton as Component } from './InteractionButton';

export default {
	title: 'Components/Molecules/InteractionButton',
	component: Component,
	argTypes: {
		count: {
			control: { type: 'number', min: 0, max: 2000 },
		},
		colorScheme: {
			options: Object.keys(InteractionButtonColorSchemeMap.default),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Like = Template.bind({});
export const LikeActive = Template.bind({});
export const Comment = Template.bind({});
export const CommentActive = Template.bind({});
export const Share = Template.bind({});

Like.args = {
	as: 'button',
	type: 'button',
	isActive: false,
	colorScheme: 'pink',
	buttonText: 'Like',
	iconName: 'heart_fillable',
};

LikeActive.args = {
	as: 'button',
	type: 'button',
	isActive: true,
	colorScheme: 'pink',
	buttonText: '3 Likes',
	iconName: 'heart_filled',
};

Comment.args = {
	as: 'button',
	type: 'button',
	isActive: false,
	colorScheme: 'violet',
	buttonText: 'Comment',
	iconName: 'comment_fillable',
};
Comment.args = {
	as: 'button',
	type: 'button',
	isActive: true,
	colorScheme: 'violet',
	buttonText: '7 Comments',
	iconName: 'comment_filled',
};

Share.args = {
	as: 'button',
	type: 'button',
	colorScheme: 'slate',
	buttonText: 'Copy Link',
	iconName: 'share',
};
