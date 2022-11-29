import React from 'react';
import PropTypes from "prop-types";
import { default as IconLib, IconNames as IcoNames } from "./IconLib";
import './Icon.css';

export const IconNames = IcoNames;
export const Icon = ({ color = "slate", size = "M", name, ...props }) => {

	const colorStyle = {
		slate: ["text-gray-700"],
		violet: ["text-purple-600"],
		gradient: ["text-gradient-to-r", "from-pink-600", "to-purple-600"],
	};

	const sizeStyle = {
		S: ["w-2"],
		M: ["w-4"],
		L: ["w-8"],
	};

	const style = [
		...(colorStyle[color] || colorStyle.slate),
		...(sizeStyle[size] || sizeStyle.M),
	];

	return (
		<span
			className={["Icon", `Icon-${size}`, ...style].join(" ")}
			{...props}
			dangerouslySetInnerHTML={{ __html: IconLib[name] }}
		>
		</span>
	);
};
Icon.propTypes = {
	/**
	 * What background color to use
	 */
	color: PropTypes.oneOf(["slate", "violet", "gradient"]),
	/**
	 * How large should the Icon be?
	 */
	size: PropTypes.oneOf(["S", "M", "L"]),
	/**
	 * Name of the icon
	 */
	name: PropTypes.oneOf(["mumble", "edit"]).isRequired,
};

Icon.defaultProps = {
	color: null,
	size: "M",
	name: IconNames[0],
};
