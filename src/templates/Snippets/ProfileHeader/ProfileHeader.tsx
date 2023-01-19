/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Image } from '../../../components/Atoms/Image';
import { UserProfile } from '../../../components/Molecules/UserProfile';
import { ImageOverlay } from '../../../components/Molecules/ImageOverlay';

import { User } from '../../../types/User';

type TProfileHeader = {
	user: User;
};

export const ProfileHeader: FC<TProfileHeader> = ({ user }) => {
	return (
		<div className="relative mb-6">
			<ImageOverlay
				icon="edit"
				buttonLabel={'Hintergrundbild anpassen'}
				onClick={function (): void {
					throw new Error('Function not implemented.');
				}}
			>
				<Image src={user.posterImage} alt={user.userName} preset="header" />
			</ImageOverlay>
			<div className="absolute right-8 bottom-0 translate-y-1/2 z-10">
				<UserProfile
					userName={user.userName}
					avatar={user.avatar}
					size="XL"
					border={true}
					href="/"
					buttonLabel="Change Avatar"
				/>
			</div>
		</div>
	);
};
