import React from 'react';

import { UserProfile as Component } from './UserProfile';
import { Current } from '../../../mocks/User';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Molecules/UserProfile',
	component: Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args): JSX.Element => <Component {...args} />;

const UserProfileImages = ['S', 'M', 'L', 'big'].reduce((acc, size) => {
	const UserProfile = Template.bind({});
	UserProfile.args = {
		size: size,
		user: Current,
	};
	acc[size] = UserProfile;
	return acc;
}, {});

export const Small = UserProfileImages['S'];
export const Medium = UserProfileImages['M'];
export const Large = UserProfileImages['L'];
export const Big = UserProfileImages['big'];
