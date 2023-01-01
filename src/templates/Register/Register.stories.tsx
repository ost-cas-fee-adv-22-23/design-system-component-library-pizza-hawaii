import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Register as Component } from './Register';

export default {
	title: 'Template/Welcome',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const Register = Template.bind({});

Register.args = {};
