import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from "/src/components/Atoms/Icon/Icon";

import './IconLink.css';

export const IconLink = ({ icon, label, link, ...props }) => (
	<a className="IconLink flex flex-col items-center" {...props}>
		{icon ? <Icon icon={icon} /> : null}
		{label}
	</a>
);

IconLink.propTypes = {
	icon: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

IconLink.defaultProps = {
	icon: "edit",
	label: "Edit Something",
	link: "#",
};
