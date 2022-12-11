import React from 'react';
import PropTypes from "prop-types";
import { default as IconLib, IconNames as IcoNames } from "./IconLib";
import './Icon.css';

export const IconNames = IcoNames;
export const Icon = ({ size, name, className, ...props }) => {
	const sizeStyle = {
		S: ["w-3"],
		M: ["w-s"],
		L: ["w-xl"],
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
// Icon.propTypes = {
// 	/**
// 	 * How large should the Icon be?
// 	 */
// 	size: PropTypes.oneOf(["S", "M", "L"]),
// 	/**
// 	 * Name of the icon
// 	 */
// 	//name: PropTypes.oneOf(["mumble", "edit"]).isRequired,
// };

Icon.defaultProps = {
	size: "M",
	name: IconNames[0],
};
