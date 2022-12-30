import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal as Component } from './Modal';

export default {
	title: 'Component/Organisms/Modal',
	component: Component,
	argTypes: {
		preset: {
			options: ['profile', 'post', 'header'],
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Modal = Template.bind({});

Modal.args = {
	title: 'Modal Title',
	children: 'Modal Content',
	isVisible: true,
};
