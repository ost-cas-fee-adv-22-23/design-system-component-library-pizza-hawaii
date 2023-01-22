import React, { FC, ReactNode } from 'react';
import { IconLink } from '../IconLink';

/*
 * Type
 */

type TUserName = {
	/**
	 * children React Node: here the name of the user.
	 */
	children: ReactNode;
	/**
	 * link string url
	 */
	href: string;
};

export const UserName: FC<TUserName> = ({ children, href }) => {
	return (
		<IconLink as="a" href={href} icon="profile" colorScheme="violet" size="S">
			{children}
		</IconLink>
	);
};
