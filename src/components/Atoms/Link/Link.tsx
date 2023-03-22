import React, { FC, ReactNode, LinkHTMLAttributes } from 'react';

/*
 * Type
 */

type TLink<T> = {
	/**
	 * HTML tag to render a link
	 */
	as?: FC<T>;

	/**
	 * provide a link reference (target url) as string
	 */
	href: string;

	/**
	 * Child Nodes
	 */
	children: ReactNode;
} & Omit<T, 'className' | 'target' | 'rel'>;

/*
 * Style
 */

const style = [
	'inline-block font-semibold',
	'text-violet-600',
	'underline underline-offset-4 decoration-1 decoration-violet-600',
];

const hoverStyle = 'hover:text-violet-700 hover:decoration-violet-200';

/**
 * Link Component
 *
 * @param {string} as - HTML tag to render a link
 * @param {string} href - provide a link reference (target url) as string for the 'a' tag
 * @param {ReactNode} children - Child Nodes
 *
 * @example <Link href='https://www.google.com'>Google</Link>
 * @example <Link as="span">Google</Link>
 */
export function Link<
	T extends {
		className?: string;
		rel?: string;
		target?: string;
	} = LinkHTMLAttributes<HTMLElement>
>({ children, as, ...props }: TLink<T>): JSX.Element {
	const Tag = as || 'a';
	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<Tag {...(props as any)} className={[...style, hoverStyle].join(' ')}>
			{children}
		</Tag>
	);
}
