import React, { FC, ReactNode } from 'react';
import { IconLink } from '../IconLink/IconLink';

/*
 * Type
 */

type TUserName = {
	children: ReactNode;
	href: string;
};

export const UserName: FC<TUserName> = ({ children, href }) => {
	return (
		<IconLink as="a" href={href} icon="profile" color="violet" size="S">
			{children}
		</IconLink>
	);
};
