import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormPassword as Component } from './FormPassword';

export default {
	title: 'Components/Molecules/Form/FormPassword',
	component: Component,
	argTypes: {
		id: {
			control: { type: 'text' },
		},
		errorMessage: {
			control: { type: 'text' },
		},
		hideLabel: {
			control: { type: 'boolean' },
		},
		showPasswordButtonLabels: {
			control: { type: 'array' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormPassword = Template.bind({});
FormPassword.args = {
	label: 'Form Password',
	showPasswordButtonLabels: ['Click to show password', 'Click to hide password'],
};

export const FormPasswordError = Template.bind({});
FormPasswordError.args = {
	label: 'Form Password and Error',
	errorMessage: 'Oh no, an error occurred',
	showPasswordButtonLabels: ['Click to show password', 'Click to hide password'],
};
