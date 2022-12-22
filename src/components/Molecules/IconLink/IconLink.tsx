import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';

import './IconLink.css';

interface BaseIconLinkProps {
	children: ReactNode;
	as: 'button' | 'a' | 'span';
	size: 'S' | 'M' | 'L';
	color: 'slate' | 'violet';
	icon: string;
	iconState?: string;
}

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

const defaultProps: Partial<IconLinkProps> = {
	as: 'a',
	size: 'M',
	color: 'violet',
	icon: 'mumble',
};

export const IconLink: FC<IconLinkProps> = ({
	children = 'NaviButton',
	as: Tag = 'a',
	color,
	size,
	icon,
	iconState,
	...props
}) => {
	const sizeMap: Record<BaseIconLinkProps['size'], string> = {
		S: 'text-sm gap-1',
		M: 'text-base gap-2',
		L: 'text-xl gap-2',
	};

	return (
		<Tag
			className={['IconLink', 'flex', 'items-center', sizeMap[size] || sizeMap.M, `M-Link-${color}`].join(' ')}
			{...props}
			data-ico-state={iconState}
		>
			<Icon name={icon} size={size} />
			{children}
		</Tag>
	);
};

IconLink.defaultProps = defaultProps;
