import React, { FC, ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';

/**
 * Settings
 */

export const possibleLinkTags = ['a', 'span'] as const;

/*
 * Type
 */

export type TLink = {
	/**
	 * Choose between the HTML tags 'a' or 'span'
	 * @type TLink
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
	 */

	as?: TLinkTag;
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
type TLinkTag = typeof possibleLinkTags[number];

/*
 * Style
 */

const style = [
	'inline-block font-semibold',
	'text-violet-600 hover:text-violet-700',
	'underline underline-offset-4 decoration-1 decoration-violet-600 hover:decoration-violet-200',
];

export const Link: FC<TLinkProps> = ({ as: Tag = 'a', href, children = 'Link', ...props }) => (
	<Tag className={style.join(' ')} {...props} href={href}>
		{children}
	</Tag>
);
