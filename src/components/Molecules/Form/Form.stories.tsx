import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form as Component } from './Form';

export default {
	title: 'Component/Molecules/Form/Form',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Form = Template.bind({});
Form.args = {
	children: `Form Content`,
};
