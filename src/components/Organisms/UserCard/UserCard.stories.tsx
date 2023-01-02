import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserCard as Component } from './UserCard';
import { Current } from '../../../mocks/User';

export default {
	title: 'Component/Organisms',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Usercard = Template.bind({});
Usercard.args = {
	user: Current,
};
