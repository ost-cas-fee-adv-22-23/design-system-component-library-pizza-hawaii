import React from 'react';

import { Header } from './Header';

export default {
	title: 'Example/Organisms/Header',
	component: Header,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const Template = (args): JSX.Element => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
