import React, { FC } from 'react';
import { IconLink } from '../IconLink/IconLink';
import { User } from '../../../types/User';

/*
 * Type
 */

type TUserName = {
	user: User;
};

export const UserName: FC<TUserName> = ({ user }) => {
	return (
		<IconLink as="a" href={`/user/${user.userName}`} icon="profile" color="violet" size="S">
			{user.userName}
		</IconLink>
	);
};
