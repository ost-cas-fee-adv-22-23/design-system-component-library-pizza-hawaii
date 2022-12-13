import React, { FC } from "react";
import { default as IconLib, IconNames as IcoNames } from "./IconLib";
import "./Icon.css";

type IconProps = {
	size?: "S" | "M" | "L";
	name: string;
};

export const IconNames = IcoNames;
export const Icon: FC<IconProps> = ({
	size = "M",
	name = IconNames[0],
	...props
}) => {
	const sizeStyle = {
		S: ["w-3"],
		M: ["w-s"],
		L: ["w-xl"],
	};

	const style = [...(sizeStyle[size] || sizeStyle.M)];

	return (
		<span
			className={["Icon", "inline-flex", ...style].join(" ")}
			{...props}
			dangerouslySetInnerHTML={{ __html: IconLib[name] }}
		></span>
	);
};
