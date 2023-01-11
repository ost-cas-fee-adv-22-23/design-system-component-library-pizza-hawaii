import React, { FC, ReactNode } from 'react';

type BaseProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
	level: 1 | 2 | 3 | 4;
	className?: string;
	children: ReactNode;
};

const sizeMap: Record<BaseProps['level'], string> = {
	1: 'text-4xl font-bold',
	2: 'text-3xl font-bold',
	3: 'text-2xl font-semibold',
	4: 'text-xl font-semibold',
};

export const Headline: FC<BaseProps> = ({ children, level = 1, as: Tag = `h${level}`, className = '', ...props }) => {
	const style = ['leading-tight', sizeMap[level], className].join(' ');
	return (
		<Tag className={style} {...props}>
			{children}
		</Tag>
	);
};
