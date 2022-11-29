import React from 'react';

import { IconLink as IcoLink } from "./IconLink";

export default {
	title: "Example/Components/IconLink",
	component: IcoLink,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen",
	},
};

const Template = (args) => <IcoLink {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {
};
