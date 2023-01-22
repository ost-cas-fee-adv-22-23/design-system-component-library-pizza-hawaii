import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid as Component, GridVariantStyleMap, GridGapStyleMap } from './Grid';

export default {
	title: 'Components/Atoms/Grid',
	component: Component,
	argTypes: {
		variant: {
			control: {
				type: 'radio',
				options: Object.keys(GridVariantStyleMap),
				description: 'choose one your grid-direction: columns (vertical) or row (horizontal)',
			},
		},
		gap: {
			control: {
				type: 'radio',
				options: Object.keys(GridGapStyleMap),
				description: 'choose one your grid-gap variant: S, M, L, XL',
			},
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const GridRow = Template.bind({});
GridRow.args = {
	variant: 'row',
	children: (
		<>
			<span>Grid</span>
			<span>Grid</span>
			<span>Grid</span>
			<span>Grid</span>
		</>
	),
};

export const GridCol = Template.bind({});
GridCol.args = {
	variant: 'col',
	children: (
		<>
			<span>Grid</span>
			<span>Grid</span>
			<span>Grid</span>
			<span>Grid</span>
		</>
	),
};
