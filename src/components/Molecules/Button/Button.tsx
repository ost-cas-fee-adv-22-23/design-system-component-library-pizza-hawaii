import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Icon, TIconName } from '../../Atoms/Icon';
import { Label } from '../../Atoms/Label';

/*
 * Type
 */

type TButton<T> = {
	/**
	 * HTML tag to render a button
	 */
	component?: FC<T>;

	/**
	 * React Children: here most probably text
	 */
	children: ReactNode;

	/**
	 * text size options of this button (S, M, L)
	 */
	size?: 'S' | 'M' | 'L';

	/**
	 * color scheme options of this button (slate, violet, gradient)
	 */
	colorScheme: 'slate' | 'violet' | 'gradient';

	/**
	 * icon name to render
	 */
	icon?: TIconName;
} & Omit<T, 'className'>;

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
 * Button component
 *
 * @param { string } as - HTML tag to render
 * @param { string } size - text size options of this button (S, M, L)
 * @param { string } colorScheme - color scheme options of this button (slate, violet, gradient)
 * @param { string } icon - icon name to render
 * @param { ReactNode } children - React Children: here most probably text
 * @param {any} props - all other props will be spreaded to the HTML Tag
 *
 * @example <Button size="M" colorScheme="violet" icon="mumble">Button</Button>
 */
export function Button<
	T extends {
		className?: string;
		type?: 'button' | 'submit' | 'reset';
	} = ButtonHTMLAttributes<HTMLElement>
>({ children, component, colorScheme = 'violet', size = 'M', icon = 'mumble', ...props }: TButton<T>): JSX.Element {
	const Tag = component || 'button';

	if (Tag === 'button') {
		props.type = 'button';
	}

	const style = [...ButtonBaseStyle, ButtonSizeMap[size], ButtonColorMap[colorScheme]];

	return (
		<Tag
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
			className={style.join(' ')}
		>
			<Label as="span" size="M">
				{children}
			</Label>
			{icon ? <Icon name={icon} /> : null}
		</Tag>
	);
}
