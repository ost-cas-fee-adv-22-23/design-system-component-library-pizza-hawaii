import React, { FC, ReactNode } from 'react';

/*
 * Type
 */

type TCard = {
	as?: 'article' | 'div' | 'section';
	children: ReactNode;
	rounded?: boolean;
	size?: keyof typeof sizeMap;
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
				'relative after:flex flex-start justify-center items-start  bg-white text-slate-900',
				rounded ? 'rounded-3xl' : '',
				sizeMap[size],
			].join(' ')}
		>
			{children}
		</Tag>
	);
};
