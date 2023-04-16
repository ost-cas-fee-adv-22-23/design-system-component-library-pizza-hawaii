import React, { FC, ReactNode, HTMLAttributes } from 'react';

/*
 * Settings
 */

export const possibleHeadlineTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span'];

/*
 * Type
 */

type THeadline = {
	/**
	 * HTML tag to render
	 * @default h{level}
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
	 */
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

	/**
	 * Visual headline level (1-4)
	 */
	level: 1 | 2 | 3 | 4;

	/**
	 * Child Nodes
	 */
	children: ReactNode;
};

type THeadlineProps = THeadline & HTMLAttributes<HTMLElement>;

/*
 * Styles
 */

export const HeadlineSizeMap: Record<THeadline['level'], string> = {
	1: 'text-4xl font-bold',
	2: 'text-3xl font-bold',
	3: 'text-2xl font-semibold',
	4: 'text-xl font-semibold',
};

/**
 * Typography for Headlines Component
 *
 * @param {string} as - HTML tag to render (h1-h5, p, span)
 * @param {number} level - Visual headline level (1-4)
 * @param {ReactNode} children - Child Nodes
 *
 * @example Headline level='1' as='h2'>My Headline</Headline>
 */

export const Headline: FC<THeadlineProps> = ({ children, level = 1, as: Tag = `h${level}`, ...props }) => (
	<Tag className={['leading-tight', 'overflow-hidden text-ellipsis', HeadlineSizeMap[level]].join(' ')} {...props}>
		{children}
	</Tag>
);
