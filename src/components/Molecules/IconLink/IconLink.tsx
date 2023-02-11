import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { Icon, TIconSize, TIconName } from '../../Atoms/Icon/Icon';

/*
 * Type
 */

type TIconLinkSize = keyof typeof IconLinkSizeMap;
type TIconLinkColor = keyof typeof IconLinkColorMap;

type TIconLink = {
	/**
	 * React Children: here most probably text
	 */
	children: ReactNode;

	/**
	 * HTML tag to render a button (button, a, span)
	 */
	as: 'a' | 'button' | 'span';

	/**
	 * text size options of this button (S, M, L)
	 */
	size?: TIconLinkSize;

	/**
	 * color scheme options of this button (slate, violet, gradient)
	 */
	colorScheme: TIconLinkColor;

	/**
	 * icon name to render
	 */
	icon: TIconName;
};

type TLinkButtonProps = TIconLink & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type THTMLButtonProps = TIconLink & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TSpanButtonProps = TIconLink & { as: 'span' } & HTMLAttributes<HTMLSpanElement>;

type TIconLinkProps = TSpanButtonProps | THTMLButtonProps | TLinkButtonProps;

/*
 * Style
 */

export const IconLinkBaseStyle: string[] = ['flex items-center', 'leading-none'];

export const IconLinkSizeMap: Record<string, string> = {
	S: 'text-sm gap-1',
	M: 'text-base gap-2',
	L: 'text-xl gap-2',
};

export const IconLinkColorMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 ',
	violet: 'text-violet-600 hover:text-violet-900 hover:bg-violet-50 ',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50',
};

/**
 * IconLink component
 *
 * @param {string} children - React Children: here most probably text
 * @param {string} as - HTML tag to render a button (button, a, span)
 * @param {string} size - text size options of this button (S, M, L)
 * @param {string} colorScheme - color scheme options of this button (slate, violet, gradient)
 * @param {string} icon - icon name to render
 *
 * @example <IconLink icon="arrowRight" colorScheme="slate" size="M">IconLink</IconLink>
 * /


/*
 * State
 */

export const IconLink: FC<TIconLinkProps> = ({
	children = 'IconLink',
	as: Tag = 'a',
	colorScheme = 'slate',
	size = 'M',
	icon,
	...props
}) => {
	const styles = [
		...IconLinkBaseStyle,
		IconLinkSizeMap[size],
		IconLinkColorMap[colorScheme],
		'group',
		'transition-all duration-300',
	];

	return (
		<Tag
			className={styles.join(' ')}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			<Icon name={icon} size={size as TIconSize} />
			{children}
		</Tag>
	);
};
