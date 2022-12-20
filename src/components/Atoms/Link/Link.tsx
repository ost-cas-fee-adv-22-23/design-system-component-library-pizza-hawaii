import React, { FC, ReactNode } from 'react';

type LinkProps = {
	as?: 'a' | 'span';
	href: string;
	children: ReactNode;
};

const defaultProps: Partial<LinkProps> = {
	as: 'a',
	href: '#',
	children: 'Link',
};

export const Link: FC<LinkProps> = ({ as: Tag = 'a', href, children, ...props }) => {
	return (
		<Tag
			className="inline-block text-violet-600 hover:text-violet-700 underline decoration-2 decoration-violet-600 hover:decoration-violet-700 underline-offset-2"
			{...props}
			href={href}
		>
			{children}
		</Tag>
	);
};

Link.defaultProps = defaultProps;
