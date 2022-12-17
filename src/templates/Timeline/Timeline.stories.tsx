import React from 'react';

import { Timeline as Component } from './Timeline';
import { Post as PostType } from '../../types/Post';
import { User as UserType } from '../../types/User';

export default {
	title: 'Example/Template',
	component: Component,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const exampleUser: UserType = {
	name: 'john.doe',
	displayName: 'John Doe',
	avatar: 'https://picsum.photos/200/300',
	email: 'doe@john.com',
};

const examplePosts: PostType[] = [
	{
		id: 1,
		createdAt: new Date('2022-12-04'),
		content: {
			title: 'Lorem ipsum dolor sit amet',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
			image: 'https://picsum.photos/200/300',
		},
		author: exampleUser,
	},
	{
		id: 2,
		createdAt: new Date('2022-12-03'),
		content: {
			title: 'Lorem ipsum dolor sit amet',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
			image: 'https://picsum.photos/200/300',
		},
		author: exampleUser,
	},
	{
		id: 3,
		createdAt: new Date('2022-12-02'),
		content: {
			title: 'Lorem ipsum dolor sit amet',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
			image: 'https://picsum.photos/200/300',
		},
		author: exampleUser,
	},
	{
		id: 4,
		createdAt: new Date('2022-12-01'),
		content: {
			title: 'Lorem ipsum dolor sit amet',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
			image: 'https://picsum.photos/200/300',
		},
		author: exampleUser,
	},
];

const Template = (args) => <Component {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Timeline = Template.bind({});

Timeline.args = {
	user: exampleUser,
	posts: examplePosts,
};
