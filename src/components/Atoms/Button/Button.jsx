import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "/src/components/Atoms/Icon/Icon";
import "./Button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, color, size, label, icon, ...props }) => {
	const colorStyle = {
		slate: ["bg-gray-700", "hover:bg-gray-800"],
		violet: ["bg-purple-600", "hover:bg-purple-700"],
		gradient: [
			"bg-gradient-to-r",
			"from-pink-600",
			"to-purple-600",
			"hover:from-pink-700",
			"hover:to-purple-700",
		],
	};

	const sizeStyle = {
		M: ["Button-m", "p-3", "rounded-lg"],
		L: ["Button-l", "pt-4", "pb-4", "pl-6", "pr-6", "rounded-lg"],
		round: ["Button-round", "p-3", "rounded-full"],
	};

	const style = [
		...(colorStyle[color] || colorStyle.slate),
		...(sizeStyle[size] || sizeStyle.M),
		"font-semibold",
		"text-base",
		"text-white",
	];

	const CustomTag = `${type}`;


	const typeAttr = {
		button: {
			type: "button",
		},
		a: {
			href: "#",
		},
		...props
	};



	return (
		<CustomTag
			className={["Button", ...style].join(" ")}
			{...typeAttr[type]}
		>
			<div className="Button--inner">{label}</div>
			{icon ? <Icon name={icon} /> : null}
		</CustomTag>
	);
};

Button.propTypes = {
	/**
	 * Button type
	 */
	type: PropTypes.oneOf(["button", "a"]),
	/**
	 * What background color to use
	 */
	color: PropTypes.oneOf(["slate", "violet", "gradient"]),
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(["M", "L", "round"]),
	/**
	 * How large should the button be?
	 */
	//icon: PropTypes.oneOf(["mumble", "edit"]),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	type: "button",
	size: "M",
	color: 'slate',
	icon: "mumble",
	onClick: undefined,
};
