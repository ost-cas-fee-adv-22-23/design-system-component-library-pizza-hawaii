import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserCard as Component } from './UserCard';
import { Current } from '../../../mocks/User';

export default {
	title: 'Examples/Snippets',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const UserCard = Template.bind({});
UserCard.args = {
	user: Current,
};
