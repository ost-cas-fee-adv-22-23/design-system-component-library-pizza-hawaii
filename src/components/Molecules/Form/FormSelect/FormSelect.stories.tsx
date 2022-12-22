import React from 'react';

import { FormSelect as Component } from './FormSelect';

export default {
	title: 'Example/Molecules/Form/FormSelect',
	component: Component,
	argTypes: {},
};

const Template = (args): JSX.Element => <Component {...args} />;
export const FormSelect = Template.bind({});
FormSelect.args = {};

export const FormSelectError = Template.bind({});
FormSelectError.args = {
	errorMessage: 'Error-Message',
};
