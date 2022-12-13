import React, { FC, Children, ReactNode } from "react";

type BaseProps = {
	as?: "div" | "section"
	size: "M" | "L";
	className?: string;
	children: ReactNode;
};

const sizeMap: Record<BaseProps["size"], string> = {
	M: "text-base",
	L: "text-xl",
};

export const Richtext: FC<BaseProps> = ({
	children,
	as: Tag = "div",
	size = "M",
	className = "",
	...props
}) => {
	const style = [
		"inline-block leading-none font-medium text-lg text-gray-900",
		sizeMap[size],
		className,
	].join(" ");

	const content =
		Children.count(children) === 1 && typeof children === "string" ? (
			<p>{children}</p>
		) : (
			children
		);

	return (
		<Tag className={style} {...props}>
			{content}
		</Tag>
	);
};
