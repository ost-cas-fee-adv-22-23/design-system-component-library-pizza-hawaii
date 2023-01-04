import React, { FC, LabelHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

const sizeMap: Record<string, string> = {
	S: 'text-sm',
	M: 'text-base',
	L: 'text-lg',
	XL: 'text-xl ',
};

type BaseLabelProps = {
	as?: 'span' | 'label' | 'p' | 'legend';
	size: keyof typeof sizeMap;
	className?: string;
	children: ReactNode;
};

type HTMLSpanProps = BaseLabelProps & {
	as: 'span' | 'p' | 'legend';
} & HTMLAttributes<HTMLElement>;

type HTMLLabelProps = BaseLabelProps & {
	as: 'label';
} & LabelHTMLAttributes<HTMLLabelElement>;

type LabelType = HTMLSpanProps | HTMLLabelProps;

export const Label: FC<LabelType> = ({ children = 'Label', as: Tag = 'span', size, ...props }) => {
	const style = ['inline-block leading-none font-semibold', sizeMap[size]].join(' ');

	return (
		<Tag
			className={style}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			{children}
		</Tag>
	);
};
