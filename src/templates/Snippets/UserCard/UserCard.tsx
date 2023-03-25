/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Label } from '../../../components/Atoms/Label';

import { Card } from '../../../components/Molecules/Card/Card';
import { IconText } from '../../../components/Molecules/IconText';
import { UserProfile } from '../UserProfile/index';
import { Button } from '../../../components/Molecules/Button';

import { User } from '../../../types/User';

type TUserCard = {
	user: User;
};

export const UserCard: FC<TUserCard> = ({ user }) => {
	return (
		<Card as="div" rounded={true} size="S">
			<Grid variant="col" gap="M" centered={true}>
				<UserProfile
					userName={user.userName}
					avatar={user.avatar}
					size="L"
					border={true}
					href={user.profileLink}
					buttonLabel="View Profile"
				/>

				<div className="flex flex-col gap-2">
					<Label as="span" size="L">
						{user.fullName}
					</Label>
					<span className="flex flex-row align-baseline gap-3">
						<a href={user.profileLink}>
							<IconText icon="profile" colorScheme="violet" size="S">
								{user.userName}
							</IconText>
						</a>
					</span>
				</div>

				<Button size="M" colorScheme="violet" icon="mumble">
					{}
					Follow
				</Button>
			</Grid>
		</Card>
	);
};
