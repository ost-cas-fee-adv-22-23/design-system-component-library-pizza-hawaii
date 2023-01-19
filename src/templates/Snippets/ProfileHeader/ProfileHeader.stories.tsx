import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileHeader as Component } from './ProfileHeader';
import { Current } from '../../../mocks/User';

export default {
	title: 'Examples/Snippets',
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const ProfileHeader = Template.bind({});
ProfileHeader.args = {
	user: Current,
};
