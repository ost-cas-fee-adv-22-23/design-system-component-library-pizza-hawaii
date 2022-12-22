import React from 'react';
import { Modal as Component } from './Modal';

export default {
	title: 'Example/Organisms/Modal',
	component: Component,
	argTypes: {
		preset: {
			options: ['profile', 'post', 'header'],
			control: { type: 'select' },
		},
	},
};

const Template = (args): JSX.Element => <Component {...args} />;

export const Modal = Template.bind({});

Modal.args = {
	title: 'Modal Title',
	children: 'Modal Content',
	isVisible: true,
};
