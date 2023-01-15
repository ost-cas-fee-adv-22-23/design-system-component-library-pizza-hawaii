import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormUpload as Component } from './FormUpload';

export default {
	title: 'Components/Molecules/Form/FormUpload',
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
export const FormUpload = Template.bind({});
FormUpload.args = {
	label: 'Form Upload',
	hint: 'JPEG oder PNG, maximal 50 MB',
};

export const FormUploadError = Template.bind({});
FormUploadError.args = {
	label: 'Form Upload and Error',
	errorMessage: 'Oh no, an error occurred',
};
