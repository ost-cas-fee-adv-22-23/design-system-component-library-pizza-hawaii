import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../Atoms/Icon/Icon';

import './IconLink.css';

type BaseProps = {
	children: ReactNode;
	as: 'button' | 'a';
	size: 'S' | 'M' | 'L';
	color: 'slate' | 'violet';
	icon: string;
	href?: string;
};

const defaultProps: Partial<BaseProps> = {
	as: 'a',
	size: 'M',
	color: 'violet',
	icon: 'mumble',
};

export const IconLink: FC<BaseProps> = ({ children = 'NaviButton', as: Tag = 'a', color, size, icon, ...props }) => {
	const sizeMap: Record<BaseProps['size'], string> = {
		S: 'text-sm gap-1',
		M: 'text-base gap-2',
		L: 'text-xl gap-2',
	};

	const typeAttr = {
		button: {
			type: 'button',
		},
		a: {
			href: '#',
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
