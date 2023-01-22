import React, { FC, ReactNode } from 'react';

/*
 * Settings
 */

export const possibleCardTags = ['article', 'div', 'section'] as const;
export const possibleCardSizes = ['S', 'M'] as const;

/*
 * Type
 */

export type TCardTag = (typeof possibleCardTags)[number];
export type TCardSize = (typeof possibleCardSizes)[number];

type TCard = {
	/**
	 * render as: HTML Tag for the Card Component
	 */
	as?: TCardTag;
	/**
	 * React Nodes children
	 */
	children: ReactNode;
	/**
	 * optional: rounded corners of the card: if true, the card will have rounded corners
	 */
	rounded?: boolean;
	/**
	 * optional: size of the card
	 */
	size?: TCardSize;
};

/*
 * Style
 */

const sizeMap: Record<string, string> = {
	S: 'py-s px-s',
	M: 'py-l px-xl',
};

export const Card: FC<TCard> = ({ as: Tag = 'div', children, size = 'M', rounded = true }) => {
	return (
		<Tag
			className={[
				'relative after:flex flex-start justify-center items-start bg-white text-slate-900',
				rounded ? 'rounded-3xl' : '',
				sizeMap[size],
			].join(' ')}
		>
			{children}
		</Tag>
	);
};
