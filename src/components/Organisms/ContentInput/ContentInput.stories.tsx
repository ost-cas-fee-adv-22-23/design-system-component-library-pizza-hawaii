import React from 'react';

import ContentInput from './ContentInput';

export default {
	title: 'Example/Organisms/ContentInput',
	component: ContentInput,
	argTypes: {
		placeholderText: 'hi there',
	},
};

const Template = (args): JSX.Element => <ContentInput {...args} />;

export const NewPost = Template.bind({});
export const AnswerPost = Template.bind({});

NewPost.args = {
	variant: 'NewPost',
	label: 'wasss up, Pal? gimme input',
	errorMessage: 'whoa there was an typo somewhere',
	author: '',
};

AnswerPost.args = {
	variant: 'AnswerPost',
	label: 'what is your response? - labeltext',
	errorMessage: 'whoa there was an typo somewhere',
	author: 'autor 2',
	createdAt: '2022-12-23T08:50:23Z',
};
