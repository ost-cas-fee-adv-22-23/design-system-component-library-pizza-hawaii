import React, { FC, LabelHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

/*
 * Type
 */

type TLabel = {
	as?: 'span' | 'label' | 'p' | 'legend';
	size: keyof typeof LabelSizeMap;
	children: ReactNode;
};

type SpanLabelProps = TLabel & { as: 'span' | 'p' | 'legend' } & HTMLAttributes<HTMLElement>;
type LabelLabelProps = TLabel & { as: 'label' } & LabelHTMLAttributes<HTMLLabelElement>;

type TLabelProps = SpanLabelProps | LabelLabelProps;

/*
 * Styles
 */

export const LabelSizeMap: Record<string, string> = {
	S: 'text-sm',
	M: 'text-base',
	L: 'text-lg',
	XL: 'text-xl',
};

export const Label: FC<TLabelProps> = ({ children = 'Label', as: Tag = 'span', size, ...rest }) => {
	const style = ['inline-block leading-none font-semibold', LabelSizeMap[size]].join(' ');

	const props = {
		...rest,
		className: style,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} as any;

	return <Tag {...props}>{children}</Tag>;
};
