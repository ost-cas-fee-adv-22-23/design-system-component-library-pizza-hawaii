import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label as Component } from './Label';

export default {
	title: 'Component/Atoms/Label',
	component: Component,
	argTypes: {
		size: {
			control: {
				type: 'select',
				options: ['S', 'M', 'L', 'XL'],
			},
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: 'S',
	children: 'Label Small',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'M',
	children: 'Label Medium',
};

export const Large = Template.bind({});
Large.args = {
	size: 'L',
	children: 'Label Large',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	size: 'XL',
	children: 'Label ExtraLarge',
};
