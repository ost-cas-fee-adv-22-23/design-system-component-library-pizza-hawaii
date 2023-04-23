/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Image } from '../../../components/Atoms/Image';
import { UserProfile } from '../UserProfile/index';
import { ImageOverlay } from '../../../components/Molecules/ImageOverlay';

import { User } from '../../../types/User';
import { ImageService } from '../../../components/Atoms/Image/ImageService';
import ProjectSettings from '../../../utils/ProjectSettings.json';

type TProfileHeader = {
	user: User;
};

export const ProfileHeader: FC<TProfileHeader> = ({ user }) => {
	const imgProps = {
		...ImageService.imgAttr(
			ProjectSettings.images.header.width,
			(ProjectSettings.images.header.width / ProjectSettings.images.header.aspectRatio[0]) *
				ProjectSettings.images.header.aspectRatio[1],
			user.posterImage
		),
	};
	return (
		<div className="relative mb-6">
			<ImageOverlay
				preset="edit"
				buttonLabel={'Hintergrundbild anpassen'}
				onClick={function (): void {
					throw new Error('Function not implemented.');
				}}
				borderRadius="L"
			>
				<Image {...imgProps} alt={''} />
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
