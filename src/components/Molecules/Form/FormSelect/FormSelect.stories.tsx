import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSelect as Component } from './FormSelect';

export default {
	title: 'Component/Molecules/Form/FormSelect',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormSelect = Template.bind({});
FormSelect.args = {};

export const FormSelectError = Template.bind({});
FormSelectError.args = {
	errorMessage: 'Error-Message',
};
