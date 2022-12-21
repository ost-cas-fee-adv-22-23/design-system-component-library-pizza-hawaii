import React from 'react';

import { FormTextarea as Component } from './FormTextarea';

export default {
	title: 'Example/Molecules/Form/FormTextarea',
	component: Component,
	argTypes: {},
};
export const FormTextarea = (args): JSX.Element => <Component {...args} />;
FormTextarea.args = {};

export const FormTextareaError = (args): JSX.Element => <Component {...args} />;
FormTextareaError.args = {
	errorMessage: 'Error-Message',
};
