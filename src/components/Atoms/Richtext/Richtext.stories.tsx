import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Richtext as Component } from './Richtext';

export default {
	title: 'Component/Atoms/Richtext',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

const string =
	'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque mauris eu diam lobortis, eget venenatis lacus viverra.</p><p>Maecenas fringilla velit vel justo pretium, in sollicitudin <a href="http://maecenasfringilla.com">Maecenasfringilla.com</a> nisi condimentum. Proin tincidunt lacus at libero venenatis, a blandit lectus euismod.</p><p><a href="#velitvel">#velitvel</a> <a href="#justopretium">#justopretium</a></p>';

export const Medium = Template.bind({});
Medium.args = {
	size: 'M',
	children: string,
};

export const Large = Template.bind({});
Large.args = {
	size: 'L',
	children: string,
};
