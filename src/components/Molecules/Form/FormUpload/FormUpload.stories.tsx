import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormUpload as Component } from './FormUpload';

export default {
	title: 'Component/Molecules/Form/FormUpload',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const FormUpload = Template.bind({});
FormUpload.args = {};

export const FormUploadError = Template.bind({});
FormUploadError.args = {
	errorMessage: 'Error-Message',
};
