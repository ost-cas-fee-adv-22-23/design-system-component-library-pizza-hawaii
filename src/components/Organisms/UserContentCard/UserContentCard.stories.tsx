import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserContentCard as Component } from './UserContentCard';
import { Current as User } from '../../../mocks/User';

export default {
	title: 'Components/Organisms/UserContentCard',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const Subcomponent = Template.bind({});
Subcomponent.args = {
	avatarVariant: 'subcomponent',
	headline: "Hello I'm a Usercard.",
	children: <p>Children Nodes of the User Content Card</p>,
	userProfile: User,
};

export const Standalone = Template.bind({});
Standalone.args = {
	avatarVariant: 'standalone',
	headline: "Hello I'm a Usercard.",
	children: <p>Children Nodes of the User Content Card</p>,
	userProfile: User,
};
