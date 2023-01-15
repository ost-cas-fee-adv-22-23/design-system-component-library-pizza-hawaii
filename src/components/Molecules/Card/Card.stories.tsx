import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card as Component } from './Card';

export default {
	/* 👇 Fun Fact: The Card is white!.
	 * so choose another background in the preview to see it in Storybook
	 * You can choose the main element in which it is rendered.
	 */
	title: 'Components/Molecules',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Card = Template.bind({});
Card.args = {};
