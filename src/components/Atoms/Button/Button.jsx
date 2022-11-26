import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color = "slate", size = "M", label, ...props }) => {

	const colorStyle = {
		slate: ["bg-gray-700"],
		violet: ["bg-purple-600"],
		gradient: ["bg-gradient-to-r", "from-pink-600", "to-purple-600"],
	};

	const sizeStyle = {
		M: ["p-3"],
		L: ["pt-4", "pb-4", "pl-6", "pr-6"],
	};

	const style = [
		...(colorStyle[color] || colorStyle.slate),
		...(sizeStyle[size] || sizeStyle.M),
		"rounded-lg",
		"font-semibold",
		"text-base",
		"text-white",
	];

	return (
		<button
			type="button"
			className={["Button", `Button--${size}`, ...style].join(" ")}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	/**
	 * What background color to use
	 */
	color: PropTypes.oneOf(["slate", "violet", "gradient"]),
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(["M", "L"]),
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
	color: null,
	size: "M",
	onClick: undefined,
};
