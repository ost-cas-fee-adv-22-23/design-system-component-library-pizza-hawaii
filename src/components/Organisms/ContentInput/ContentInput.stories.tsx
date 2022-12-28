import React from 'react';
import { User } from '../../../types/User';
import { All as UserList } from '../../../mocks/User';
import ContentInput from './ContentInput';

export default {
	title: 'Example/Organisms/ContentInput',
	component: ContentInput,
	argTypes: {
		placeholderText: 'hi there',
	},
};

const getRandUser = (): User => UserList[Math.floor(Math.random() * UserList.length)];
const Template = (args): JSX.Element => <ContentInput {...args} />;

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
	placeHolderText: 'was meinst Du dazu?',
	createdAt: '2022-12-23T08:50:23Z',
	author: getRandUser(),
};
