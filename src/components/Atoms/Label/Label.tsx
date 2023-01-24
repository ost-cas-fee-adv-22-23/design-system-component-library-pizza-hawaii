import React, { FC, LabelHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

/*
 * Type
 */

export type TLabel = {
	/**
	 * HTML tag to render a label (span, label, p, legend)
	 * @default: span
	 */
	as?: 'span' | 'label' | 'p' | 'legend';

	/**
	 * text size options of this label
	 */
	size: 'S' | 'M' | 'L' | 'XL';

	/**
	 * React Children: here most probably text
	 */
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

/**
 * Typography for Label Component
 *
 * @param { string } as - HTML tag to render
 * @param { string } size - text size options of this label
 * @param { ReactNode } children - React Children: here most probably text
 * @example	<Label as='legend' size='M'>My Labeltext</Label>
 *
 */

export const Label: FC<TLabelProps> = ({ children = 'Label', as: Tag = 'span', size, ...rest }) => {
	const style = ['inline-block leading-none font-semibold', LabelSizeMap[size]].join(' ');

	const props = {
		...rest,
		className: style,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} as any;

	return <Tag {...props}>{children}</Tag>;
};
