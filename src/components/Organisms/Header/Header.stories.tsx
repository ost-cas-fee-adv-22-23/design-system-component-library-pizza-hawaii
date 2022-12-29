import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header as Component } from './Header';

export default {
	title: 'Example/Organisms/Header',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
