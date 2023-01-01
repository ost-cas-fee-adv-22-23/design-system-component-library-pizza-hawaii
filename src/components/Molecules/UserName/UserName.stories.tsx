import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserName as Component } from './UserName';
import { Current } from '../../../mocks/User';

export default {
	title: 'Component/Molecules/UserName',
	component: Component,
	argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args): JSX.Element => <Component {...args} />;

export const UserName = Template.bind({});
UserName.args = {
	user: Current,
};
