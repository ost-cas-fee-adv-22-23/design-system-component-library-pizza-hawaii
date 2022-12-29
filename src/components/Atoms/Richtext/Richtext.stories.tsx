import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Richtext as Component } from './Richtext';

export default {
	title: 'Example/Atoms/Richtext',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Medium = Template.bind({});
Medium.args = {
	size: 'M',
	children: 'Lorem imsum dolor sit amet',
};

export const Large = Template.bind({});
Large.args = {
	size: 'L',
	children: 'Lorem imsum dolor sit amet',
};
