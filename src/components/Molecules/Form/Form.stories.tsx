import React from 'react';
import { Form as Component } from './Form';

export default {
	title: 'Example/Molecules/Form/Form',
	component: Component,
	argTypes: {},
};

const Template = (args) => <Component {...args} />;

export const Form = Template.bind({});
Form.args = {
	children: `Form Content`,
};
