import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContentCard as Component } from './ContentCard';
import { PostsFormated as Posts } from '../../../mocks/Post';

export default {
	title: 'Example/Snippet/ContentCard',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Detailpage = Template.bind({});
Detailpage.args = {
	variant: 'detailpage',
	post: Posts[0],
};

export const Timeline = Template.bind({});
Timeline.args = {
	variant: 'timeline',
	post: Posts[0],
};

export const Responsive = Template.bind({});
Responsive.args = {
	variant: 'response',
	post: Posts[0],
};
