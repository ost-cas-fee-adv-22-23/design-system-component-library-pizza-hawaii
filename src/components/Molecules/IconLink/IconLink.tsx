import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';

const sizeMap: Record<string, string> = {
	S: 'text-sm gap-1',
	M: 'text-base gap-2',
	L: 'text-xl gap-2',
};

type BaseIconLinkProps = {
	children: ReactNode;
	as: 'button' | 'a' | 'span';
	size: keyof typeof sizeMap;
	color: 'slate' | 'violet';
	icon: string;
	iconState?: string;
};

type SpanButtonProps = BaseIconLinkProps & {
	as: 'span';
} & HTMLAttributes<HTMLSpanElement>;

type HTMLButtonProps = BaseIconLinkProps & {
	as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseIconLinkProps & {
	as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type IconLinkProps = SpanButtonProps | HTMLButtonProps | LinkButtonProps;

export const IconLink: FC<IconLinkProps> = ({
	children = 'NaviButton',
	as: Tag = 'a',
	color,
	size,
	icon,
	iconState,
	...props
}) => {
	return (
		<Tag
			className={['IconLink', 'flex', 'items-center', sizeMap[size] || sizeMap.M, `M-Link-${color}`].join(' ')}
			data-ico-state={iconState}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			<Icon name={icon} size={size} />
			{children}
		</Tag>
	);
};
