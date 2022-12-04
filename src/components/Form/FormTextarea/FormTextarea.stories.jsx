import React from 'react';

import { FormTextarea as Component } from "./FormTextarea";

export default {
	title: "Example/Components/Form/FormTextarea",
	component: Component,
	argTypes: {},
};
export const FormTextarea = (args) => <Component {...args} />;
FormTextarea.args = {
};

export const FormTextareaError = (args) => <Component {...args} />;
FormTextareaError.args = {
	errorMessage: "Error-Message",
};
