import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InteractionButtonColorSchemeMap, InteractionButton as Component } from './InteractionButton';

export default {
	title: 'Components/Molecules/InteractionButton',
	component: Component,
	argTypes: {
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
	isActive: false,
	colorScheme: 'pink',
	buttonText: 'Like',
	iconName: 'heart_fillable',
};

LikeActive.args = {
	isActive: true,
	colorScheme: 'pink',
	buttonText: '3 Likes',
	iconName: 'heart_filled',
};

Comment.args = {
	isActive: false,
	colorScheme: 'violet',
	buttonText: 'Comment',
	iconName: 'comment_fillable',
};
Comment.args = {
	isActive: true,
	colorScheme: 'violet',
	buttonText: '7 Comments',
	iconName: 'comment_filled',
};

Share.args = {
	colorScheme: 'slate',
	buttonText: 'Copy Link',
	iconName: 'share',
};
