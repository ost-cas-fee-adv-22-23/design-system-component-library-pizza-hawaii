import React from 'react';
import { Image as Component } from './Image';

export default {
	title: 'Example/Atoms/Image',
	component: Component,
	argTypes: {
		preset: {
			options: ['profile', 'post', 'header'],
			control: { type: 'select' },
		},
	},
};

export const Image = (args): JSX.Element => <Component {...args} />;
Image.args = {};
