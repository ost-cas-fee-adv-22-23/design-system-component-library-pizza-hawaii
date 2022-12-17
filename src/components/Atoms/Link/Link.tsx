import React, { FC, ReactNode } from 'react';

type BaseProps = {
	as?: 'a | span';
	href: string;
	children: ReactNode;
};

export const Link: FC<BaseProps> = ({ as: Tag = 'a', href = '', children, ...props }) => {
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
