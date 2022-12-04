import React from 'react';

import { FormSelect as Component } from "./FormSelect";

export default {
	title: "Example/Components/Form/FormSelect",
	component: Component,
	argTypes: {
	},
};
export const FormSelect = (args) => <Component {...args} />;
FormSelect.args = {
};

export const FormSelectError = (args) => <Component {...args} />;
FormSelectError.args = {
	errorMessage: "Error-Message",
};
