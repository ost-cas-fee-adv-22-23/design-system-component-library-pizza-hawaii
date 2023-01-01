import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Wrapper as Component } from './Wrapper';

export default {
	title: 'Component/Atoms/Wrapper',
	component: Component,
	argTypes: {
		as: {
			control: {
				type: 'select',
				options: ['div', 'section', 'body', 'article', 'footer'],
			},
		},
		wrapperStyles: {
			control: {
				type: 'select',
				options: ['w-screen', 'w-min', 'w-full', 'w-max'],
			},
		},
		children: String,
	},
};

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Div = Template.bind({});
export const Section = Template.bind({});
export const Body = Template.bind({});
export const Footer = Template.bind({});
export const Article = Template.bind({});

Div.args = {
	as: 'div',
	wrapperStyles: 'w-screen',
	children: 'Div wrapper content',
};

Section.args = {
	as: 'section',
	wrapperStyles: 'w-min',
	children: 'Section wrapper content',
};

Body.args = {
	as: 'body',
	wrapperStyles: 'w-full',
	children: 'Body wrapper content',
};

Article.args = {
	as: 'article',
	wrapperStyles: 'w-max',
	children: 'Article wrapper content',
};

Footer.args = {
	as: 'footer',
	wrapperStyles: 'w-full',
	children: 'Footer wrapper content',
};
