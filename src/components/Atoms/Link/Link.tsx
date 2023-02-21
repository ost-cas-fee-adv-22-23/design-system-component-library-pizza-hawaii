import React, { FC, ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';

/*
 * Type
 */

type TLink = {
	/**
	 * HTML tag to render a link (a or span)
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
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
	'text-violet-600',
	'underline underline-offset-4 decoration-1 decoration-violet-600',
];

const hoverStyle: Record<string, string> = {
	a: 'hover:text-violet-700 hover:decoration-violet-200',
	span: 'group-hover:text-violet-700 group-hover:decoration-violet-200',
};

/**
 * Link Component
 *
 * @param {string} as - Choose between the HTML tags 'a' or 'span'
 * @param {string} href - provide a link reference (target url) as string for the 'a' tag
 * @param {ReactNode} children - Child Nodes
 *
 * @example <Link href='https://www.google.com'>Google</Link>
 * @example <Link as="span">Google</Link>
 */

export const Link: FC<TLinkProps> = ({ as: Tag = 'a', href, children = 'Link', ...props }) => (
	<Tag className={[...style, hoverStyle[Tag]].join(' ')} {...props} href={href}>
		{children}
	</Tag>
);
