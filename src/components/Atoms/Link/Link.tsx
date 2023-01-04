import React, { FC, ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';

type BaseProps = {
	as: 'a' | 'span';
	href: string;
	children: ReactNode;
};

type LinkProps = BaseProps & {
	as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;
type SpanProps = BaseProps & {
	as: 'span';
} & HTMLAttributes<HTMLSpanElement>;

type Props = LinkProps | SpanProps;

export const Link: FC<Props> = ({ as: Tag = 'a', href, children = 'Link', ...props }) => {
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
