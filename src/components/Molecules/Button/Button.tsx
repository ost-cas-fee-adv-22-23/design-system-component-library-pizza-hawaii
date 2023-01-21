import React, { FC, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

import { Icon, TIconName } from '../../Atoms/Icon';
import { Label } from '../../Atoms/Label';

/*
 * Settings
 */

export const possibleButtonTags = ['button', 'a', 'span'] as const;
export const possibleButtonSizes = ['S', 'M', 'L'] as const;
export const possibleButtonColorschemes = ['slate', 'violet', 'gradient'] as const;

/*
 * Type
 */

export type TButtonSize = typeof possibleButtonSizes;
export type TButtonColor = typeof possibleButtonColorschemes[number];
export type TButtonTags = typeof possibleButtonTags[number];

export type TButton = {
	/**
	 * render as: HTML Tag for the Button: 'button', 'a' or 'span'
	 */
	as?: TButtonTags;
	/**
	 * children: React Node (a.k.a. Button Text goes here).
	 */
	children: ReactNode;
	/**
	 * choose between 3 sizes: 'S', 'M', 'L'
	 */
	size?: keyof typeof ButtonSizeMap;
	/**
	 * choose between 3 colorSchemes: 'slate', 'violet', 'gradient'
	 */
	colorScheme: TButtonColor;
	/**
	 * choose a icon by Name from the IconLibrary
	 */
	icon?: TIconName;
};

type THTMLButtonProps = TButton & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TLinkButtonProps = TButton & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type TSpanButtonProps = TButton & { as: 'span' } & HTMLAttributes<HTMLSpanElement>;
type TButtonProps = THTMLButtonProps | TLinkButtonProps | TSpanButtonProps;

/*
 * Styles
 */

export const ButtonBaseStyle = [
	'flex items-center justify-center',
	'w-full',
	'transition-all duration-300',
	'outline-none outline-offset-0',
];

export const ButtonSizeMap: Record<string, string> = {
	S: 'p-2 rounded-lg gap-y-0 gap-x-2 text-sm font-semibold',
	M: 'p-3 rounded-lg gap-y-0 gap-x-2 text-base font-semibold',
	L: 'py-4 px-6 rounded-lg gap-y-1 gap-x-3 text-base font-semibold',
};

export const ButtonColorMap: Record<string, string> = {
	slate: [
		'text-white bg-slate-600',
		'hover:bg-slate-700 hover:outline-slate-100 hover:outline-3',
		'focus:bg-slate-700 focus:outline-slate-200 focus:outline-4',
		'active:bg-slate-700 active:outline-slate-200 active:outline-4',
	].join(' '),
	violet: [
		'text-white bg-violet-600',
		'hover:bg-violet-700 hover:outline-violet-100 hover:outline-3',
		'focus:bg-violet-700 focus:outline-violet-200 focus:outline-4',
		'active:bg-violet-700 active:outline-violet-200 active:outline-4',
	].join(' '),
	gradient: [
		'text-white bg-gradient-to-r from-violet-600 via-pink-500 to-violet-700 bg-pos-0 bg-size-200',
		'hover:bg-pos-100 hover:bg-size-300 hover:outline-violet-100 hover:outline-3',
		'focus:bg-pos-100 focus:bg-size-300 focus:outline-violet-200 focus:outline-4',
		'active:bg-pos-100 active:bg-size-300 active:outline-violet-200 active:outline-4',
	].join(' '),
};

/**
 * Typography for Button Component
 * @param { size } sizes Visual size of button (3 sizes)
 * @param { as } as HTML tag to render for button
 * @param { colorScheme } ColorSchema of the Button
 * @param { ReactNode } children Child Nodes
 * @param { icon } icon name of IconLibrary
 * @example
 * return (
 *   <Button icon="eye" size="M">ButtonText</Button>
 * )
 * /


/*
 * Functional Component
 */

export const Button: FC<TButtonProps> = ({
	children,
	as: Tag = 'button',
	colorScheme = 'violet',
	size = 'M',
	icon = 'mumble',
	...props
}) => {
	const style = [...ButtonBaseStyle, ButtonSizeMap[size], ButtonColorMap[colorScheme]];

	return (
		<Tag
			className={style.join(' ')}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			<Label as="span" size="M">
				{children}
			</Label>
			{icon ? <Icon name={icon} /> : null}
		</Tag>
	);
};
