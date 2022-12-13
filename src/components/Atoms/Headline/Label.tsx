import React, { FC, LabelHTMLAttributes, ReactNode } from "react";

type BaseProps = {
	as?: "span" | "label";
	size: "S" | "M" | "L" | "XL";
	className?: string;
	children: ReactNode;
};

type LabelProps = BaseProps & {
	as: "label";
} & LabelHTMLAttributes<HTMLLabelElement>;

type Props = BaseProps | LabelProps;

const sizeMap: Record<Props["size"], string> = {
	S: "text-sm",
	M: "text-base",
	L: "text-xl",
	XL: "text-2xl ",
};



export const Label: FC<Props> = ({
	children,
	as: Tag = "span",
	size = "M",
	className = "",
	...props
}) => {
	console.log(sizeMap[size]);
	const style = [
		"inline-block leading-none font-semibold",
		sizeMap[size],
		className,
	].join(" ");

	return (
		<Tag className={style} {...props}>
			{children}
		</Tag>
	);
};

