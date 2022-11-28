import React from 'react';
import { Icon as Component } from './Icon';
import { default as IconLib, IconNames as IcoNames } from "./IconLib";

export default {
	title: "Example/Components/Icon",
	component: Component,
};

const Template = (args) => <Component {...args} />;

export const Icon = Template.bind({});
Icon.args = {
	name: "mumble",
};

