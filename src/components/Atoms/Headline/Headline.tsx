import React, { FC, ReactNode } from 'react';

/*
 * Type
 */

type THeadlineTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

export type THeadline = {
	as?: THeadlineTag;
	level: keyof typeof sizeMap;
	children: ReactNode;
};

/*
 * Styles
 */

const sizeMap: Record<number, string> = {
	1: 'text-4xl font-bold',
	2: 'text-3xl font-bold',
	3: 'text-2xl font-semibold',
	4: 'text-xl font-semibold',
};

export const Headline: FC<THeadline> = ({ children, level = 1, as: Tag = `h${level}` as THeadlineTag, ...props }) => (
	<Tag className={['leading-tight', sizeMap[level]].join(' ')} {...props}>
		{children}
	</Tag>
);
