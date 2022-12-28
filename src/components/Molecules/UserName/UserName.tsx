import React, { FC } from 'react';
import { IconLink } from '../IconLink/IconLink';
import { User } from '../../../types/User';

type BaseProps = {
	user: User;
};

export const UserName: FC<BaseProps> = ({ user }) => {
	return (
		<IconLink as="a" href={`/user/${user.userName}`} icon="profile" color="violet" size="S">
			{user.userName}
		</IconLink>
	);
};
