import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Richtext as Component, RichtextSizeMap } from './Richtext';

export default {
	title: 'Components/Atoms/Richtext',
	component: Component,
	argTypes: {
		size: {
			control: {
				type: 'radio',
				options: Object.keys(RichtextSizeMap),
			},
		},
	},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const SimpleText = Template.bind({});
SimpleText.args = {
	size: 'L',
	children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	allowedTags: ['p', 'a'],
};

export const Richtext = Template.bind({});
Richtext.args = {
	size: 'L',
	children:
		'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque mauris eu diam lobortis, eget venenatis lacus viverra.</p><p>Maecenas fringilla velit vel justo pretium, in sollicitudin <a href="http://maecenasfringilla.com">Maecenasfringilla.com</a> nisi condimentum. Proin tincidunt lacus at libero venenatis, a blandit lectus euismod.</p><p><a href="#velitvel">#velitvel</a> <a href="#justopretium">#justopretium</a></p>',
	allowedTags: ['p', 'a'],
};

export const ForbiddenTags = Template.bind({});
ForbiddenTags.args = {
	size: 'L',
	children: '<script>alert("Hello World")</script> and some other Tags <b>bold</b>, <small>small</small>, <i>italic</i>',
	allowedTags: ['p', 'a'],
};
