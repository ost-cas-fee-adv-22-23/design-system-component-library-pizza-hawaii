import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card as Component } from './Card';

export default {
	title: 'Component/Molecules',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Card = Template.bind({});
Card.args = {};
