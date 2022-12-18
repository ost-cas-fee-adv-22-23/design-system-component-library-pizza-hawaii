import React from 'react';

import { Timeline as Component } from './Timeline';

import { All as examplePosts } from '../../mocks/Post';
import { Current as exampleUser } from '../../mocks/User';

export default {
	title: 'Example/Template',
	component: Component,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const Template = (args) => <Component {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Timeline = Template.bind({});

Timeline.args = {
	user: exampleUser,
	posts: examplePosts,
};
