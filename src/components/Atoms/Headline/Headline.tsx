import React, { FC, ReactNode, HTMLAttributes } from 'react';

/*
 * Settings
 */

export const possibleHeadlineTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span'] as const;

/*
 * Type
 */

type THeadlineTag = typeof possibleHeadlineTags[number];

export type THeadline = {
	/**
	 * HTML tag to render
	 * @default h{level}
	 * @type THeadlineTag
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
	 */
	as?: THeadlineTag;
	/**
	 * Visual headline level (1-4)
	 */
	level: keyof typeof HeadlineSizeMap;
	/**
	 * Child Nodes
	 */
	children: ReactNode;
};

export type THeadlineProps = THeadline & HTMLAttributes<HTMLElement>;

/*
 * Styles
 */

export const HeadlineSizeMap: Record<number, string> = {
	1: 'text-4xl font-bold',
	2: 'text-3xl font-bold',
	3: 'text-2xl font-semibold',
	4: 'text-xl font-semibold',
};

/**
 * Typography component for Headlines
 * @param {number} level Visual headline level (1-4)
 * @param {THeadlineTag} as HTML tag to render
 * @param {ReactNode} children Child Nodes
 * @example
 * return (
 *   <Headline level='1' as='h2'>My Headline</Headline>
 * )
 */
export const Headline: FC<THeadlineProps> = ({ children, level = 1, as: Tag = `h${level}` as THeadlineTag, ...props }) => (
	<Tag className={['leading-tight', HeadlineSizeMap[level]].join(' ')} {...props}>
		{children}
	</Tag>
);
