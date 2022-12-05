import React from 'react';

import { FormInput as Component } from "./FormInput";

export default {
	title: "Example/Components/Form/FormInput",
	component: Component,
	argTypes: {},
};
export const FormInput = (args) => <Component {...args} />;
FormInput.args = {
};

export const FormInputError = (args) => <Component {...args} />;
FormInputError.args = {
	errorMessage: "Error-Message",
};

