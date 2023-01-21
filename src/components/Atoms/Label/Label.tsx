import React, { FC, LabelHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
/*
 * Settings
 */

export const possibleLabelTags = ['span', 'label', 'p', 'legend'] as const;
export const possibleLabelSizes = ['S', 'M', 'L', 'XL'] as const;
/*
 * Type
 */

type TLabelTags = typeof possibleLabelTags[number];
type TLabelsSizes = typeof possibleLabelSizes[number];
export type TLabel = {
	/**
	 * HTML tag to render a label
	 * @default: label
	 * @type TLabel
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
	 */
	/**
	 * Choose a HTML tag in which Label should be rendered
	 */
	as?: TLabelTags;
	/**
	 * text size options of this label
	 */
	size: TLabelsSizes;
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
 * @param { as } HTML-Tag of Label
 * @param { size } text size of Label
 * @param { ReactNode } children Child Nodes.
 * @returns (
 * 	<Label as='span' size='M'>My Labeltext</Label>
 * )
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
