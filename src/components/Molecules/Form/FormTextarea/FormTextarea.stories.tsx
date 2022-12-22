import React from 'react';

import { FormTextarea as Component } from './FormTextarea';

export default {
	title: 'Example/Molecules/Form/FormTextarea',
	component: Component,
	argTypes: {},
};

const Template = (args): JSX.Element => <Component {...args} />;
export const FormTextarea = Template.bind({});
FormTextarea.args = {};

export const FormTextareaError = Template.bind({});
FormTextareaError.args = {
	errorMessage: 'Error-Message',
};
