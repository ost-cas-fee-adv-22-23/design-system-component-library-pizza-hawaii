import React from 'react';

import { IconLink as IcoLink } from "./IconLink";
import { IconNames } from "../Icon/IconLib";

export default {
	title: "Example/Atoms/IconLink",
	component: IcoLink,
	parameters: {
		icon: {
			options: IconNames,
			control: { type: "select" },
		},
	},
};

const Template = (args) => <IcoLink {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {
	oneline: true,
};

export const IconLink2 = Template.bind({});
IconLink2.args = {
	oneline: false,
};
