import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header as Component } from './Header';

import { Current as exampleUser } from '../../../mocks/User';

export default {
	title: 'Component/Organisms',
	component: Component,
	parameters: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Header = Template.bind({});
Header.args = {
	user: exampleUser,
};
