import React from 'react';

import { Register as Component } from './Register';

export default {
	title: 'Example/Template',
	component: Component,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const Template = (args): JSX.Element => <Component {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Register = Template.bind({});
