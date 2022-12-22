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

const Template = (args): JSX.Element => <Component {...args} />;
export const Image = Template.bind({});
Image.args = {};
