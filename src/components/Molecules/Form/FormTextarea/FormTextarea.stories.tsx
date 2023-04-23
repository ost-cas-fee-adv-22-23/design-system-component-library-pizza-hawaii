import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormTextarea as Component } from './FormTextarea';

export default {
	title: 'Components/Molecules/Form/FormTextarea',
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
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormTextarea = Template.bind({});
FormTextarea.args = {
	label: 'Form Textarea',
};

export const FormTextareaError = Template.bind({});
FormTextareaError.args = {
	label: 'Form Textarea and Error',
	errorMessage: 'Oh no, an error occurred',
};
