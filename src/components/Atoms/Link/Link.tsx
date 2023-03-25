import React, { FC, ReactNode, LinkHTMLAttributes } from 'react';

/*
 * Type
 */

type TLink<T> = {
	/**
	 * HTML tag to render a link
	 */
	component?: FC<T>;

	/**
	 * provide a link reference (target url) as string
	 */
	href: string;

	/**
	 * Child Nodes
	 */
	children: ReactNode;

	/**
	 * optional: open link in new tab
	 * @default false
	 */
	newTab?: boolean;
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
 * @param {string} component - Component to render a link (e.g. NextLink)
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
>({ children, component, newTab = false, ...props }: TLink<T>): JSX.Element {
	const Tag = component || 'a';

	return (
		<Tag
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
			className={[...style, hoverStyle].join(' ')}
			{...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
		>
			{children}
		</Tag>
	);
}
