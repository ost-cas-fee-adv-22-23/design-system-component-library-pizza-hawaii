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
	linkState: string;
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
	slate: 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 ',
	violet: 'text-violet-600 hover:text-violet-900 hover:bg-violet-50 ',
	pink: ' text-pink-400 hover:text-pink-600 hover:bg-pink-50',
};

/*
 * State
 */

export const LinkStateMap: Record<string, string> = {
	link: '',
	hoverState: 'py-2 px-3 rounded-full',
	activeState: [`bg-${IconLinkColorMap.color}-100}` + 'py-2 px-3 rounded-full'].join(' '),
};

export const IconStateMap: Record<string, string> = {
	fillable: 'fillable',
	filled: 'filled',
};

export const IconLink: FC<TIconLinkProps> = ({
	children = 'NaviButton',
	as: Tag = 'a',
	color,
	size = 'M',
	icon,
	iconState,
	linkState,
	...props
}) => {
	const styles = [
		'flex items-center',
		'leading-none',
		IconLinkSizeMap[size],
		IconLinkColorMap[color],
		LinkStateMap[linkState],
		IconStateMap[iconState],
		'group',
		'hover: cursor-pointer',
		'transition-all',
	];

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
