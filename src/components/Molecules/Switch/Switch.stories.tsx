import React from 'react';

import { Switch as Component } from './Switch';

export default {
	title: 'Example/Molecules/Switch',
	component: Component,
	parameters: {},
};

const Template = (args) => <Component {...args} />;

export const Variant1 = Template.bind({});
Variant1.args = {
	isActive: 'mumbles',
};
