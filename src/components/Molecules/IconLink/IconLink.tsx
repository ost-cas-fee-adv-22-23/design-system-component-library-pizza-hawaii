import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { Icon, TIconSize, TIconName } from '../../Atoms/Icon/Icon';

/*
 * Settings
 */

export const possibleIconLinkTags = ['a', 'button', 'span'] as const;

/*
 * Type
 */

export type TIconLinkSize = keyof typeof IconLinkSizeMap;
export type TIconLinkColor = keyof typeof IconLinkColorMap;
export type TIconLinkTag = (typeof possibleIconLinkTags)[number];

type TIconLink = {
	/**
	 * chilren: React Node (a.k.a: Link Text)
	 */
	children: ReactNode;
	/**
	 * choose between three HTML elements for the rendered Link
	 * 'a', 'button', 'span'
	 */
	as: TIconLinkTag;
	/**
	 * choose between three sizes: 'S', 'M', 'L'
	 */
	size?: TIconLinkSize;
	/**
	 * choose between thee colorSchemes: 'slate', 'violet', 'pink'
	 */
	colorScheme: TIconLinkColor;
	/**
	 * choose an iconName string from our IconLib
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
 * Typography for Button Component
 * @param { size } sizes 3 levels of size
 * @param { as } as HTML tag to render for IconLink
 * @param { colorScheme } ColorSchema of the IconLink
 * @param { ReactNode } children Child Nodes
 * @param { icon } icon name of IconLibrary
 * @example
 * return (
 *   <IconLink colorScheme="violet" icon="settings" size="M" />
 * )
 * /


/*
 * State
 */

export const IconLink: FC<TIconLinkProps> = ({
	children = 'NaviButton',
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
