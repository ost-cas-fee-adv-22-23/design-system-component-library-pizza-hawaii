import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

import { Icon, TIconName } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

/*
 * Type
 */

type TButton = {
	children: ReactNode;
	as?: 'button' | 'a' | 'span';
	size?: keyof typeof ButtonSizeMap;
	color: keyof typeof ButtonColorMap;
	icon?: TIconName;
};

type THTMLButtonProps = TButton & { as: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>;
type TLinkButtonProps = TButton & { as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>;
type TSpanButtonProps = TButton & { as: 'span' } & AnchorHTMLAttributes<HTMLSpanElement>;

type TButtonProps = THTMLButtonProps | TLinkButtonProps | TSpanButtonProps;

/*
 * Styles
 */

export const ButtonBaseStyle = ['flex items-center justify-center', 'w-full', 'transition-all'];

export const ButtonSizeMap: Record<string, string> = {
	S: 'p-2 rounded-lg gap-y-0 gap-x-2 text-sm font-semibold',
	M: 'p-3 rounded-lg gap-y-0 gap-x-2 text-base font-semibold',
	L: 'py-4 px-6 rounded-lg gap-y-1 gap-x-3 text-base font-semibold',
};

export const ButtonColorMap: Record<string, string> = {
	slate: 'text-white bg-slate-700 hover:bg-slate-800',
	violet: 'text-white bg-violet-600 hover:bg-violet-700',
	gradient:
		'text-white bg-gradient-to-r from-violet-600 via-pink-500 to-violet-700 bg-pos-0 bg-size-200 hover:bg-pos-100 hover:bg-size-300',
};

/*
 * Functional Component
 */

export const Button: FC<TButtonProps> = ({
	children,
	as: Tag = 'button',
	color = 'violet',
	size = 'M',
	icon = 'mumble',
	...props
}) => {
	const style = [...ButtonBaseStyle, ButtonSizeMap[size], ButtonColorMap[color]];

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
