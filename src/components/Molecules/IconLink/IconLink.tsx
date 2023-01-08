import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';
import '../../../components/Components-base.css';

export const sizeMap: Record<string, string> = {
	S: 'text-sm gap-1',
	M: 'text-base gap-2',
	L: 'text-xl gap-2',
};

type BaseIconLinkProps = {
	children: ReactNode;
	as: 'a' | 'button' | 'span';
	size?: keyof typeof sizeMap;
	color: 'slate' | 'violet' | 'pink';
	icon: string;
	iconState?: string;
};
type LinkButtonProps = BaseIconLinkProps & {
	as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type HTMLButtonProps = BaseIconLinkProps & {
	as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type SpanButtonProps = BaseIconLinkProps & {
	as: 'span';
} & HTMLAttributes<HTMLSpanElement>;

type IconLinkProps = SpanButtonProps | HTMLButtonProps | LinkButtonProps;

export const IconLink: FC<IconLinkProps> = ({
	children = 'NaviButton',
	as: Tag = 'a',
	color,
	size = 'M',
	icon,
	iconState,
	...props
}) => {
	return (
		<Tag
			className={['IconLink', 'flex', 'items-center', sizeMap[size], `M-Link-${color}`, 'hover:cursor-pointer'].join(
				' '
			)}
			data-ico-state={iconState}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			{...(props as any)}
		>
			<Icon name={icon} size={size as 'S' | 'M' | 'L'} />
			{children}
		</Tag>
	);
};
