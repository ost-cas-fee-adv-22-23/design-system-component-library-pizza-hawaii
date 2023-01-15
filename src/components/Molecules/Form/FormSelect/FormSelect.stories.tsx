import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSelect as Component } from './FormSelect';

export default {
	title: 'Components/Molecules/Form/FormSelect',
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

const exampleOptions = [
	{
		value: '1',
		label: 'Option 1',
	},
	{
		value: '2',
		label: 'Option 2',
	},
	{
		value: '3',
		label: 'Option 3',
	},
];

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormSelect = Template.bind({});
FormSelect.args = {
	label: 'Form Select',
	options: exampleOptions,
};

export const FormSelectError = Template.bind({});
FormSelectError.args = {
	label: 'Form Select and Error',
	options: exampleOptions,
	errorMessage: 'Oh no, an error occurred',
};
