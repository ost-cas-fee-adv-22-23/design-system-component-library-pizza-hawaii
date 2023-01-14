import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';

/*
 * Type
 */

type TIconLinkSize = keyof typeof IconLinkSizeMap;

type TIconLink = {
	children: ReactNode;
	as: 'a' | 'button' | 'span';
	size?: TIconLinkSize;
	color: 'slate' | 'violet' | 'pink';
	icon: string;
	iconState: string;
};

type TLinkButtonProps = TIconLink & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type THTMLButtonProps = TIconLink & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TSpanButtonProps = TIconLink & { as: 'span' } & HTMLAttributes<HTMLSpanElement>;

type TIconLinkProps = TSpanButtonProps | THTMLButtonProps | TLinkButtonProps;

/*
 * Style
 */

export const IconLinkSizeMap: Record<string, string> = {
	S: 'text-sm gap-1',
	M: 'text-base gap-2',
	L: 'text-xl gap-2',
};

export const IconLinkColorMap: Record<string, string> = {
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 active:bg-slate-100',
	violet: 'text-violet-600 hover:text-violet-900 hover:bg-violet-50 active:bg-violet-50',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50 active:bg-pink-50',
};

/*
 * State
 */
export const IconStateMap: Record<string, string> = {
	linkState: 'underline',
	hoverState: 'py-2 px-3 rounded-full',
	activeState: 'bg-pink-500',
	withReaction: 'py-2 px-3 rounded-full',
};

export const IconLink: FC<TIconLinkProps> = ({
	children = 'NaviButton',
	as: Tag = 'a',
	color,
	size = 'M',
	icon,
	iconState,
	...props
}) => {
	const styles = [
		'flex items-center',
		'leading-none',
		IconLinkSizeMap[size],
		IconLinkColorMap[color],
		IconStateMap[iconState],
		'group',
		'hover: cursor-pointer',
		'transition-all',
	];
	console.log('Iconlink state', iconState)
	return (
		<Tag
			className={styles.join(' ')}
			data-ico-state={iconState}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			<Icon name={icon} size={size as 'S' | 'M' | 'L'} />
			{children}
		</Tag>
	);
};
