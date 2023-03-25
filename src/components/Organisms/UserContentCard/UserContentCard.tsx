/* eslint-disable import/no-unresolved */
import React, { FC, ReactNode, Children } from 'react';

import { Headline } from '../../Atoms/Headline/Headline';
import { Grid } from '../../Atoms/Grid/Grid';

import { Card } from '../../Molecules/Card/Card';
import { UserProfile, TUserProfileData, TUserProfileStyle } from '../../../templates/Snippets/UserProfile/index';

/*
 * Type
 */

export type TUserContentCard = {
	/**
	 * children: React node
	 */
	children: ReactNode;

	/**
	 * headline: React node (slot for headline position)
	 */
	headline: ReactNode;

	/**
	 * userProfile: User Profile Data (userName, avatar, href, buttonLabel)
	 */
	userProfile: TUserProfileData;

	/**
	 * avatarVariant: Avatar variant (standalone, subcomponent)
	 */
	avatarVariant: 'standalone' | 'subcomponent';

	/**
	 * avatarSize: Avatar size (S, M)
	 * @default M
	 */
	avatarSize: 'S' | 'M';
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

/**
 * User Content Card Component
 *
 * @param {string} headline - headline
 * @param {object} userProfile - user profile data
 * @param {string} userProfile.userName - user name
 * @param {string} userProfile.avatar - user avatar
 * @param {string} userProfile.href - user href
 * @param {string} userProfile.buttonLabel - user button label
 * @param {string} avatarVariant - avatar variant
 * @param {string} avatarSize - avatar size
 *
 * @example
 * <UserContentCard
 * 	headline={headerSlotContent}
 * 	userProfile={{
 * 		avatar: author.avatar,
 * 		userName: author.userName,
 * 		href: author.profileLink,
 * 		buttonLabel: 'Change Avatar',
 * 	}}
 * 	avatarVariant="standalone"
 * 	avatarSize="M"
 * >
 * 	Content of the card
 * </UserContentCard>
 *
 */

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
		href: user.href,
		buttonLabel: 'Change Avatar',
		border: border,
		size: size as TUserProfileStyle['size'],
	};

	return (
		<Card as="div" rounded={avatarVariant === 'standalone'} size="M">
			<Grid variant="col" gap="L">
				<Grid variant="row" gap="S" centered={true}>
					<div className={UserProfileVariantMap[avatarVariant]}>
						<UserProfile {...userProfileAttr} />
					</div>
					{Children.count(headline) === 1 && typeof headline === 'string' ? (
						<Headline level={4} as="span">
							{headline}
						</Headline>
					) : (
						headline
					)}
				</Grid>

				{children}
			</Grid>
		</Card>
	);
};
