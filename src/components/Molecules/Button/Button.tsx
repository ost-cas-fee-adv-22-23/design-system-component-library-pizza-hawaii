import React, { FC } from "react";

import { Icon } from "../../Atoms/Icon/Icon";
import { Label } from "../../Atoms/Label/Label";

import "/src/components/Components-base.css";
import "./Button.css";

type ButtonProps = {
	label: string;
	as: "button" | "a";
	size: "round" | "M" | "L";
	color: "slate" | "violet" | "gradient";
	icon?: string;
	type?: "button" | "submit";
	href?: string;
	onClick?: () => void;
};

const defaultProps: Partial<ButtonProps> = {
	as: "button",
	size: "M",
	color: "violet",
	icon: "mumble",
	onClick: undefined,
};

export const Button: FC<ButtonProps> = ({
	label,
	as: Tag = "a",
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

	return (
		<Tag
			className={ ["Button", ...style].join(" ") }
			{ ...typeAttr[Tag] }
		>
			<Label className="Button--inner" size="M">{label}</Label>
			{icon ? <Icon name={ icon } /> : null}
		</Tag>
	);
};

Button.defaultProps = defaultProps;
