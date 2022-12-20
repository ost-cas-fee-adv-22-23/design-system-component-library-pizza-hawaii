import React, { FC, ReactNode } from 'react';

import { Icon } from '../../Atoms/Icon/Icon';

import './IconLink.css';

interface IconLinkProps {
	children: ReactNode;
	as?: 'button' | 'a' | 'span';
	size: 'S' | 'M' | 'L';
	color: 'slate' | 'violet';
	icon: string;
	href?: string;
	type?: string;
}

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
	type,
	href,
	...props
}) => {
	const sizeMap: Record<IconLinkProps['size'], string> = {
		S: 'text-sm gap-1',
		M: 'text-base gap-2',
		L: 'text-xl gap-2',
	};

	const typeAttr = {
		button: {
			type: type || 'button',
		},
		a: {
			href: href || '#',
		},
		...props,
	};
	return (
		<Tag
			className={['IconLink', 'flex', 'items-center', sizeMap[size] || sizeMap.M, `M-Link-${color}`].join(' ')}
			{...typeAttr[Tag]}
		>
			<Icon name={icon} size={size} />
			{children}
		</Tag>
	);
};

IconLink.defaultProps = defaultProps;
