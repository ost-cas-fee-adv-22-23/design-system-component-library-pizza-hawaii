import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link as Component } from './Link';

export default {
	title: 'Component/Atoms/Link',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;
export const Link = Template.bind({});
Link.args = {};
