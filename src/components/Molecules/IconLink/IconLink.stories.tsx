import React from 'react';

import { IconNames } from '../../Atoms/Icon/IconLib';
import { IconLink as IcoLink } from './IconLink';

export default {
	title: 'Example/Molecules/IconLink',
	component: IcoLink,
	argTypes: {
		icon: {
			options: IconNames,
			control: { type: 'select' },
		},
	},
};

const Template = (args): JSX.Element => <IcoLink {...args} />;

export const IconLink = Template.bind({});
IconLink.args = {};
