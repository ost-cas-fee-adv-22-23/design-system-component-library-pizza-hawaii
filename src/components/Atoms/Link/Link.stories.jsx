import React from 'react';
import { Link as Component } from './Link';

export default {
	title: 'Example/Atoms/Link',
	component: Component,
	argTypes: {},
};

export const Link = (args) => <Component {...args} />;
Link.args = {
	children: 'Link Label',
};
