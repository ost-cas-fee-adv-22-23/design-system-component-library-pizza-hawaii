import React, { FC, ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';

/*
 * Type
 */

type TLink = {
	as: 'a' | 'span';
	href: string;
	children: ReactNode;
};

type THTMLLinkProps = TLink & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type TSpanLinkProps = TLink & { as: 'span' } & HTMLAttributes<HTMLSpanElement>;

type TLinkProps = THTMLLinkProps | TSpanLinkProps;

/*
 * Style
 */

export const Link: FC<TLinkProps> = ({ as: Tag = 'a', href, children = 'Link', ...props }) => {
	const style = [
		'inline-block font-semibold',
		'text-violet-600 hover:text-violet-700',
		'underline underline-offset-4 decoration-1 decoration-violet-600 hover:decoration-violet-200',
	];

	return (
		<Tag className={style.join(' ')} {...props} href={href}>
			{children}
		</Tag>
	);
};
