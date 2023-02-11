import React, { FC, ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';

/*
 * Type
 */

type TLink = {
	/**
	 * HTML tag to render a link (a or span)
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
	 */
	as?: 'a' | 'span';

	/**
	 * provide a link reference (target url) as string
	 */
	href: string;

	/**
	 * Child Nodes
	 */
	children: ReactNode;
};

type THTMLLinkProps = TLink & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type TSpanLinkProps = TLink & { as: 'span' } & HTMLAttributes<HTMLSpanElement>;

type TLinkProps = THTMLLinkProps | TSpanLinkProps;

/*
 * Style
 */

const style = [
	'inline-block font-semibold',
	'text-violet-600 hover:text-violet-700',
	'underline underline-offset-4 decoration-1 decoration-violet-600 hover:decoration-violet-200',
];

/**
 * Link Component
 *
 * @param {string} as - Choose between the HTML tags 'a' or 'span'
 * @param {string} href - provide a link reference (target url) as string
 * @param {ReactNode} children - Child Nodes
 *
 * @example Link as='span' href='https://www.google.com'>My Link</Link>
 */

export const Link: FC<TLinkProps> = ({ as: Tag = 'a', href, children = 'Link', ...props }) => (
	<Tag className={style.join(' ')} {...props} href={href}>
		{children}
	</Tag>
);
