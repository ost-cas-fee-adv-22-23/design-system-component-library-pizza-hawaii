import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileNew as Component } from './ProfileNew';

import { PostsFormated as examplePosts } from '../../mocks/Post';
import { Users as promotedUsers, NewUser as exampleUser } from '../../mocks/User';

export default {
	title: 'Template/Mumble',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const ProfileNew = Template.bind({});

ProfileNew.args = {
	user: exampleUser,
	promotedPosts: examplePosts,
	promotedUsers: promotedUsers,
};
