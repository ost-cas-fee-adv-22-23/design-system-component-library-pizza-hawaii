/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Grid } from '../../Atoms/Grid/Grid';
import { Label } from '../../Atoms/Label/Label';

import { Card } from '../../Molecules/Card/Card';
import { UserName } from '../../Molecules/UserName/UserName';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';
import { Button } from '../../Molecules/Button/Button';

import { User } from '../../../types/User';

type BaseProps = {
	user: User;
};

export const UserCard: FC<BaseProps> = ({ user }) => {
	return (
		<Card as="div" rounded={true} size="S">
			<Grid variant="col" gap="M" centerd={true}>
				<UserProfile
					userName={user.userName}
					avatar={user.avatar}
					size="L"
					border={true}
					profileLink={`/user/${user.userName}`}
				/>

				<div className="flex flex-col gap-2">
					<Label as="span" size="L">
						{user.fullName}
					</Label>
					<span className="flex flex-row align-baseline gap-3">
						<UserName href={`/user/${user.userName}`}>{user.userName}</UserName>
					</span>
				</div>

				<Button as="a" href={`/user/${user.userName}`} size="M" color="violet" icon="mumble">
					Follow
				</Button>
			</Grid>
		</Card>
	);
};
