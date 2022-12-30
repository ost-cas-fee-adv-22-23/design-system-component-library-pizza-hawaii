import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Headline as Component } from './Headline';

export default {
	title: 'Component/Atoms/Headline',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const H1 = Template.bind({});
H1.args = {
	level: 1,
	children: 'Lorem imsum dolor sit amet',
};

export const H2 = Template.bind({});
H2.args = {
	level: 2,
	children: 'Lorem imsum dolor sit amet',
};

export const H3 = Template.bind({});
H3.args = {
	level: 3,
	children: 'Lorem imsum dolor sit amet',
};

export const H4 = Template.bind({});
H4.args = {
	level: 4,
	children: 'Lorem imsum dolor sit amet',
};
