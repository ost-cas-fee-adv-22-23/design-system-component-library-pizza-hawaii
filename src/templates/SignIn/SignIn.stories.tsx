import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignIn as Component } from './SignIn';

export default {
	title: 'Template/Welcome',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const SignIn = Template.bind({});

SignIn.args = {};
