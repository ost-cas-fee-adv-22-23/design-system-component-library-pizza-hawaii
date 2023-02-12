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
	 * href string: here the link to the user profile.
	 */
	href: string;
};

/**
 * User Name Component
 *
 * @param { ReactNode } children - Child Nodes, here the name of the user.
 * @param { string } href - here the link to the user profile.
 *
 * @example <UserName href="https://www.google.com">User Name</UserName>
 */

export const UserName: FC<TUserName> = ({ children, href }) => {
	return (
		<IconLink as="a" href={href} icon="profile" colorScheme="violet" size="S">
			{children}
		</IconLink>
	);
};
