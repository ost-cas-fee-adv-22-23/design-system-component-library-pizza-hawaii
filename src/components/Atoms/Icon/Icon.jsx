import React from 'react';
import PropTypes from "prop-types";
import { default as IconLib, IconNames as IcoNames } from "./IconLib";
import './Icon.css';

export const IconNames = IcoNames;
export const Icon = ({ size, name, className, ...props }) => {
	const sizeStyle = {
		s: ["w-2"],
		m: ["w-4"],
		l: ["w-8"],
	};

	const style = [...(sizeStyle[size] || sizeStyle.M)];

	return (
		<span
			className={["Icon", "inline-flex", className, ...style].join(" ")}
			{...props}
			dangerouslySetInnerHTML={{ __html: IconLib[name] }}
		></span>
	);
};
Icon.propTypes = {
	/**
	 * How large should the Icon be?
	 */
	size: PropTypes.oneOf(["s", "m", "l"]),
	/**
	 * Name of the icon
	 */
	//name: PropTypes.oneOf(["mumble", "edit"]).isRequired,
};

Icon.defaultProps = {
	size: "m",
	name: IconNames[0],
};
