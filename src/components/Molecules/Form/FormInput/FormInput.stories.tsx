import React from 'react';

import { FormInput as Component } from './FormInput';

export default {
	title: 'Example/Molecules/Form/FormInput',
	component: Component,
	argTypes: {},
};

const Template = (args): JSX.Element => <Component {...args} />;
export const FormInput = Template.bind({});
FormInput.args = {};

export const FormInputError = Template.bind({});
FormInputError.args = {
	errorMessage: 'Error-Message',
};
