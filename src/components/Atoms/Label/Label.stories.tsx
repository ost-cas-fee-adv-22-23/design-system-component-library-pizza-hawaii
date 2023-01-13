import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label as Component, LabelSizeMap } from './Label';

export default {
	title: 'Components/Atoms/Label',
	component: Component,
	argTypes: {
		size: {
			control: {
				type: 'radio',
				options: Object.keys(LabelSizeMap),
			},
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Label = Template.bind({});
Label.args = {
	size: 'L',
	children: 'Label',
};
