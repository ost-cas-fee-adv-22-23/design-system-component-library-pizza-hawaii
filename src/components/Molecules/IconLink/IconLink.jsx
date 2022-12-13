import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from "/src/components/Atoms/Icon/Icon";

import './IconLink.css';

export const IconLink = ({
	icon,
	label,
	href,
	color,
	oneline,
	className,
	...props
}) => (
	<a
		href={href || "#"}
		className={[
			className,
			"IconLink",
			"flex",
			"items-center",
			oneline ? "flex-row" : "flex-col",
			`M-Link-${color}`,
		].join(" ")}
		{...props}
	>
		{icon ? (
			<span className="ml-xs mr-xs mt-xxs mb-xxs">
				<Icon name={icon} />
			</span>
		) : null}
		{label}
	</a>
);

IconLink.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	color: PropTypes.oneOf(["slate", "violet"]),
};

IconLink.defaultProps = {
	icon: "edit",
	label: "Edit Something",
	href: "",
	color: "slate",
	oneline: true,
};
