import React, { FC, ReactNode } from 'react';

type HeadlineProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
	level: '1' | '2' | '3' | '4';
	className?: string;
	children: ReactNode;
};

const sizeMap: Record<HeadlineProps['level'], string> = {
	'1': 'text-5xl',
	'2': 'text-4xl',
	'3': 'text-3xl',
	'4': 'text-xl',
};

export const Headline: FC<HeadlineProps> = ({ children, level = '1', as: Tag = `h${level}`, className = '', ...props }) => {
	const style = ['leading-tight font-bold', sizeMap[level], className].join(' ');

	return (
		<Tag className={style} {...props}>
			{children}
		</Tag>
	);
};
