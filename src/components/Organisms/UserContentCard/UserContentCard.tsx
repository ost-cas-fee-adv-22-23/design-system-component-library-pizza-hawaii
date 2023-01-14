/* eslint-disable import/no-unresolved */
import React, { FC, ReactNode, Children } from 'react';

import { Headline } from '../../Atoms/Headline/Headline';
import { Grid } from '../../Atoms/Grid/Grid';

import { Card } from '../../Molecules/Card/Card';
import { UserProfile, TUserProfileData, TUserProfileStyle } from '../../Molecules/UserProfile/UserProfile';

/*
 * Type
 */

export type TUserContentCard = {
	children: ReactNode;
	headline: ReactNode;
	userProfile: TUserProfileData;
	avatarVariant: keyof typeof UserProfileVariantMap;
	avatarSize: keyof typeof UserProfileAvatarSizeMap;
};

/*
 * Styles
 */

const UserProfileVariantMap = {
	standalone: 'absolute left-0 transform -translate-x-1/2',
	subcomponent: 'flex',
};

const UserProfileAvatarSizeMap = {
	S: { size: 'S', border: false },
	M: { size: 'M', border: true },
};

export const UserContentCard: FC<TUserContentCard> = ({
	headline,
	userProfile: user,
	children,
	avatarVariant = 'standalone',
	avatarSize = 'M',
}) => {
	const { size, border } = UserProfileAvatarSizeMap[avatarSize];

	const userProfileAttr = {
		userName: user.userName,
		avatar: user.avatar,
		profileLink: user.profileLink,
		border: border,
		size: size as TUserProfileStyle['size'],
	};

	return (
		<Card as="article" rounded={avatarVariant === 'standalone'} size="M">
			<Grid variant="col" gap="L">
				<Grid variant="row" gap="S" centerd={true}>
					<div className={UserProfileVariantMap[avatarVariant]}>
						<UserProfile {...userProfileAttr} />
					</div>
					{Children.count(headline) === 1 && typeof headline === 'string' ? (
						<Headline level={4}>{headline}</Headline>
					) : (
						headline
					)}
				</Grid>

				{children}
			</Grid>
		</Card>
	);
};
