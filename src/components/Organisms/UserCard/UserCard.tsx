/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Card } from '../../Molecules/Card/Card';
import { UserName } from '../../Molecules/UserName/UserName';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';

import { Label } from '../../Atoms/Label/Label';

import { User } from '../../../types/User';

import { Button } from '../../Molecules/Button/Button';

type BaseProps = {
	user: User;
};

export const UserCard: FC<BaseProps> = ({ user }) => {
	return (
		<Card as="div" rounded={true} size="S">
			<div>
				<div className="flex flex-col items-center gap-4">
					<UserProfile user={user} size="L" border={true} href={`/user/${user.userName}`} />

					<div className="flex flex-col gap-2">
						<Label as="span" size="L">
							{user.fullName}
						</Label>
						<span className="flex flex-row align-baseline gap-3">
							<UserName user={user} />
						</span>
					</div>

					<Button as="a" href={`/user/${user.userName}`} size="M" color="violet" icon="mumble">
						Follow
					</Button>
				</div>
			</div>
		</Card>
	);
};
