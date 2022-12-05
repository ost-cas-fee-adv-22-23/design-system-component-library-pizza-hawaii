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
		`M-Button-base`,
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
			{...typeAttr[tag]}
		>
			<div className="Button--inner">
				{label}
			</div>
			{icon ? <Icon name={icon} /> : null}
		</CustomTag>
	);
};

Button.propTypes = {
	tag: PropTypes.oneOf(["button", "a"]),
	color: PropTypes.oneOf(["slate", "violet", "gradient"]),
	size: PropTypes.oneOf(["s", "m", "l"]),
	variant: PropTypes.oneOf(["", "round"]),
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	tag: "button",
	size: "m",
	color: "violet",
	icon: "mumble",
	onClick: undefined,
};
