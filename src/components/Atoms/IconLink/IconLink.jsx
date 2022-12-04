import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from "/src/components/Atoms/Icon/Icon";

import './IconLink.css';

export const IconLink = ({ icon, label, oneline, className, ...props }) => (
	<a
		href={props.href || "#"}
		className={[
			className,
			"IconLink",
			"flex",
			"items-center",
			oneline ? "flex-row" : "flex-col",
		].join(" ")}
		{...props}
	>
		{icon ? <Icon className={`ml-2 mr-2 mt-1 mb-1`} name={icon} /> : null}
		{label}
	</a>
);

IconLink.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

IconLink.defaultProps = {
	icon: "edit",
	label: "Edit Something",
	oneline: false,
};
