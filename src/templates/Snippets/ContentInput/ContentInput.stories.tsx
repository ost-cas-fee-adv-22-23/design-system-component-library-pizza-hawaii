import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContentInput as Component } from './ContentInput';

import { Current } from '../../../mocks/User';

export default {
	title: 'Examples/Snippets/ContentInput',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const NewPost = Template.bind({});
NewPost.args = {
	variant: 'newPost',
	headline: 'Hey, was gibt’s neues?',
	placeHolderText: 'Deine Meinung zählt!',
	author: Current,
};

export const AnswerPost = Template.bind({});
AnswerPost.args = {
	variant: 'answerPost',
	placeHolderText: 'Was meinst Du dazu...?',
	author: Current,
};
