import React from 'react';

import { UserName as Component } from './UserName';
import { Current } from '../../../mocks/User';

export default {
	title: 'Example/Molecules/UserName',
	component: Component,
	argTypes: {},
};

const Template = (args): JSX.Element => <Component {...args} />;

export const UserName = Template.bind({});
UserName.args = {
	user: Current,
};
