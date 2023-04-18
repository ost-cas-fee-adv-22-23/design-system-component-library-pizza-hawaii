import React, { FC, ReactNode } from 'react';

/*
 * Type
 */

type TCard = {
	/**
	 * HTML tag to render a card (article, div, section)
	 */
	as?: 'article' | 'div' | 'section';

	/**
	 * Child Nodes of the card
	 */
	children: ReactNode;

	/**
	 * optional: the card can be rounded
	 */
	rounded?: boolean;

	/**
	 * optional: the card can have a size: choose the size: 'S','M'
	 */
	size?: 'S' | 'M';
};

/*
 * Style
 */

const sizeMap: Record<string, string> = {
	S: 'py-s px-s',
	M: 'py-l px-xl sm:py-m sm:px-m',
};

/**
 * Card Component
 *
 * @param { string } as - HTML tag to render a card (article, div, section)
 * @param { string } size - size of the card: 'S','M'
 * @param { boolean } rounded - the card can be rounded
 * @param { ReactNode } children - Child Nodes of the card
 *
 * @example <Card as="article" size="M" rounded={true}>Hello World</Card>
 */

export const Card: FC<TCard> = ({ as: Tag = 'div', children, size = 'M', rounded = true }) => {
	return (
		<Tag
			className={[
				'Card',
				'relative flex-start justify-center items-start bg-white text-slate-900',
				rounded ? 'rounded-3xl' : '',
				sizeMap[size],
			].join(' ')}
		>
			{children}
		</Tag>
	);
};
