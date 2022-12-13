import React from 'react';
import { SplitScreen as Component } from './SplitScreen';

export default {
	title: "Example/Organisms/SplitScreen/SplitScreen",
	component: Component,
	argTypes: {},
};

const Template = (args) => <Component {...args} />;


export const SplitScreen = Template.bind({});
SplitScreen.args = {
	children: `SplitScreen Content`,
};
