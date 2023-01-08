import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Profile as Component } from './Profile';

import { PostsFormated as examplePosts } from '../../mocks/Post';
import { Current as exampleUser } from '../../mocks/User';

export default {
	title: 'Template/Mumble',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Profile = Template.bind({});

Profile.args = {
	user: exampleUser,
	posts: examplePosts,
};
