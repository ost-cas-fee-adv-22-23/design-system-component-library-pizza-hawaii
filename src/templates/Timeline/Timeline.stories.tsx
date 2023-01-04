import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Timeline as Component } from './Timeline';

import { PostsFormated as examplePosts } from '../../mocks/Post';
import { Current as exampleUser } from '../../mocks/User';

export default {
	title: 'Template/Mumble',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Timeline = Template.bind({});

Timeline.args = {
	user: exampleUser,
	posts: examplePosts,
};
