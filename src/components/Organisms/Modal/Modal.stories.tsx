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

export const Modal = (args): JSX.Element => <Component {...args} />;
Modal.args = {
	title: 'Modal Title',
	children: 'Modal Content',
	isVisible: true,
};
