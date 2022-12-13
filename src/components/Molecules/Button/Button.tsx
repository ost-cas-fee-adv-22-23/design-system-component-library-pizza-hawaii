import React, { FC } from "react";

import { Icon } from "../../Atoms/Icon/Icon";
import { Label } from "../../Atoms/Label/Label";

import "/src/components/Components-base.css";
import "./Button.css";

type ButtonProps = {
	label: string;
	tag: "button" | "a";
	size: "round" | "M" | "L";
	color: "slate" | "violet" | "gradient";
	icon?: string;
	onClick: () => void;
};

type ButtonPreset = {
	base: string;
	label: string;
	icon: string;
};

const defaultProps: Partial<ButtonProps> = {
	tag: "button",
	size: "M",
	color: "violet",
	icon: "mumble",
	onClick: undefined,
};

export const Button: FC<ButtonProps> = ({
	label,
	tag,
	color,
	size,
	icon,
	...props
}) => {
	const style = [
		`M-Button-base`,
		`M-Button-${size.toLowerCase()}`,
		`M-Button-${color.toLowerCase()}`
	];

	const typeAttr = {
		button: {
			type: "button",
		},
		a: {
			href: "#",
		},
		...props,
	};

	const CustomTag = `${tag}`;
	return (
		<CustomTag
			className={ ["Button", ...style].join(" ") }
			{ ...typeAttr[tag] }
		>
			<Label className="Button--inner" size="M">{label}</Label>
			{icon ? <Icon name={ icon } /> : null}
		</CustomTag>
	);
};

Button.defaultProps = defaultProps;
