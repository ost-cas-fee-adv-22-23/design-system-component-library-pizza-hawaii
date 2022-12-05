import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import "./Button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ tag, color, size, label, icon, ...props }) => {

	const style = [
		"flex",
		"items-center",
		`M-Button-${size}`,
		`M-Button-${color}`,
	];

	const CustomTag = `${tag}`;


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
			<div className="Button--inner group-hover:text-green-300">
				{label}
			</div>
			{icon ? <Icon name={icon} /> : null}
		</CustomTag>
	);
};

Button.propTypes = {
	/**
	 * Button tag
	 */
	tag: PropTypes.oneOf(["button", "a"]),
	/**
	 * What background color to use
	 */
	color: PropTypes.oneOf(["slate", "violet", "gradient"]),
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(["s", "m", "l"]),
	/**
	 * How should the button be?
	 */
	variant: PropTypes.oneOf(["", "round"]),
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
	tag: "button",
	size: "m",
	color: "violet",
	icon: "mumble",
	onClick: undefined,
};
