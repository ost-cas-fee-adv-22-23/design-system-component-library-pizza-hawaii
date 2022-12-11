import React from 'react';

import { UserName as Component } from "./UserName";

export default {
	title: "Example/Atoms/UserName",
	component: Component,
	argTypes: {},
};

export const UserName = (args) => <Component {...args} />;
UserName.args = {
	username: "Pinapple Peter",
};
