import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

type BaseButtonProps = {
	children: ReactNode;
	as?: 'button' | 'a';
	size?: keyof typeof btnSizeMap;
	color: keyof typeof colorMap;
	icon?: string;
};

type HTMLButtonProps = BaseButtonProps & {
	as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseButtonProps & {
	as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = HTMLButtonProps | LinkButtonProps;

export const baseStyle = ['flex items-center justify-center', 'text-base font-semibold', 'cursor-pointer'];

export const btnSizeMap: Record<string, string> = {
	S: 'p-2 rounded-lg gap-y-0 gap-x-2 text-sm font-semibold',
	M: 'p-3 rounded-lg gap-y-0 gap-x-2',
	L: 'py-4 px-6 rounded-lg gap-y-1 gap-x-3',
};

export const colorMap: Record<string, string> = {
	slate: 'text-white bg-slate-700 hover:bg-slate-800',
	violet: 'text-white bg-violet-600 hover:bg-violet-700',
	gradient:
		'text-white bg-gradient-to-r transition-all ease-out duration-200 bg-pos-0 bg-size-200 from-violet-600 via-pink-600 to-violet-700 hover:bg-pos-100',
};

export const Button: FC<ButtonProps> = ({
	children,
	as: Tag = 'button',
	color = 'violet',
	size = 'M',
	icon = 'mumble',
	...props
}) => {
	const style = [...baseStyle, 'w-full', btnSizeMap[size], colorMap[color]];

	return (
		<Tag
			className={['w-full', ...style].join(' ')}
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
