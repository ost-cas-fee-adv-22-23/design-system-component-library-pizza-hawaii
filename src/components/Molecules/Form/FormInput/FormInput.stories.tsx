import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormInput as Component } from './FormInput';
import { IconNames } from '../../../Atoms/Icon/IconLib';

export default {
	title: 'Components/Molecules/Form/FormInput',
	component: Component,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormInput = Template.bind({});
FormInput.args = {};

export const FormInputError = Template.bind({});
FormInputError.args = {
	errorMessage: 'Error-Message',
	icon: 'cancel',
};
