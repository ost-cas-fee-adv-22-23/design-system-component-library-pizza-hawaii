import React from 'react';

import { FormInput as Component } from './FormInput';

export default {
	title: 'Example/Molecules/Form/FormInput',
	component: Component,
	argTypes: {},
};
export const FormInput = (args): JSX.Element => <Component {...args} />;
FormInput.args = {};

export const FormInputError = (args): JSX.Element => <Component {...args} />;
FormInputError.args = {
	errorMessage: 'Error-Message',
};
