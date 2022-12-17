import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Timeline as Component } from './Timeline';

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
