import React, { FC, ReactNode } from 'react';
import { IconLink } from '../IconLink';

/*
 * Type
 */

export type TUserName = {
	/**
	 * children React Node: here the name of the user.
	 */
	children: ReactNode;
	/**
	 * provide a link href string url
	 */
	href: string;
};
/*
 * Styles
 */
/**
 *
 * @param { children } children Child Nodes
 * @param { href } url link href string
 * @example
 * return (
 * <UserName href="/user/johndoe">
 *	 John Doe
 * </UserName>
 * )
 */

export const UserName: FC<TUserName> = ({ children, href }) => {
	return (
		<IconLink as="a" href={href} icon="profile" colorScheme="violet" size="S">
			{children}
		</IconLink>
	);
};
