import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormTextarea as Component } from './FormTextarea';

export default {
	title: 'Component/Molecules/Form/FormTextarea',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormTextarea = Template.bind({});
FormTextarea.args = {};

export const FormTextareaError = Template.bind({});
FormTextareaError.args = {
	errorMessage: 'Error-Message',
};
