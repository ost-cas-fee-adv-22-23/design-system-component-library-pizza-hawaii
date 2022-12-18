import React from 'react';

import { SignIn as Component } from './SignIn';

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
export const SignIn = Template.bind({});
