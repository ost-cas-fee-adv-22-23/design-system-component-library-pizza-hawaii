import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { User } from '../../../types/User';
import { Users as UserList } from '../../../mocks/User';
import { ContentInput as Component } from './ContentInput';

export default {
	title: 'Example/Organisms/ContentInput',
	component: Component,
} as ComponentMeta<typeof Component>;

const getRandUser = (): User => UserList[Math.floor(Math.random() * UserList.length)];

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const NewPost = Template.bind({});
export const AnswerPost = Template.bind({});

NewPost.args = {
	variant: 'newPost',
	headline: 'Hey, was geht ab?',
	placeHolderText: 'Deine Meinung zählt!',
	author: getRandUser(),
};

AnswerPost.args = {
	variant: 'answerPost',
	headline: '',
	placeHolderText: 'Was meinst Du dazu...?',
	createdAt: '2022-12-23T08:50:23Z',
	author: getRandUser(),
};
