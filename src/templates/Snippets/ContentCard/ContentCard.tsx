/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { TimeStamp } from '../../../components/Atoms/TimeStamp';
import { Image } from '../../../components/Atoms/Image';
import { Richtext } from '../../../components/Atoms/Richtext';
import { Label } from '../../../components/Atoms/Label';

import { ImageService } from '../../../components/Atoms/Image/ImageService';
import { IconText } from '../../../components/Molecules/IconText';
import { ImageOverlay } from '../../../components/Molecules/ImageOverlay';
import { InteractionButton } from '../../../components/Molecules/InteractionButton';

import { CopyToClipboardButton } from '../../../components/Organisms/CopyToClipboardButton';
import { UserContentCard, TUserContentCard } from '../../../components/Organisms/UserContentCard/UserContentCard';

import { Post } from '../../../types/Post';

import ProjectSettings from '../../../utils/ProjectSettings.json';
/*
 * Type
 */

type TContentCard = {
	variant: 'detailpage' | 'timeline' | 'response';
	post: Post;
};

type TContentCardvariantMap = {
	headlineSize: 'S' | 'M' | 'L' | 'XL';
	textSize: 'M' | 'L';
	avatarSize: TUserContentCard['avatarSize'];
	avatarVariant: TUserContentCard['avatarVariant'];
};

/*
 * Style
 */

const contentCardvariantMap: Record<TContentCard['variant'], TContentCardvariantMap> = {
	detailpage: {
		headlineSize: 'XL',
		textSize: 'L',
		avatarSize: 'M',
		avatarVariant: 'standalone',
	},
	timeline: {
		headlineSize: 'L',
		textSize: 'M',
		avatarSize: 'M',
		avatarVariant: 'standalone',
	},
	response: {
		headlineSize: 'M',
		textSize: 'M',
		avatarSize: 'S',
		avatarVariant: 'subcomponent',
	},
};

export const ContentCard: FC<TContentCard> = ({ variant, post }) => {
	const setting = contentCardvariantMap[variant] || contentCardvariantMap.detailpage;

	const headerSlotContent = (
		<Grid variant="col" gap="S">
			<Label as="span" size={setting.headlineSize}>
				{post.author.fullName}
			</Label>
			<Grid variant="row" gap="S">
				<a href={post.author.profileLink}>
					<IconText icon="profile" colorScheme="violet" size="S">
						{post.author.userName}
					</IconText>
				</a>
				<IconText icon="calendar" colorScheme="slate" size="S">
					<TimeStamp date={post.createdAt} />
				</IconText>
			</Grid>
		</Grid>
	);

	const imgProps = {
		...ImageService.imgAttr(
			ProjectSettings.images.post.width,
			(ProjectSettings.images.post.width / ProjectSettings.images.post.aspectRatio[0]) *
				ProjectSettings.images.post.aspectRatio[1],
			post.image || ''
		),
	};

	return (
		<UserContentCard
			headline={headerSlotContent}
			userProfile={{
				avatar: post.author.avatar,
				userName: post.author.userName,
				href: post.author.profileLink,
			}}
			avatarVariant={setting.avatarVariant}
			avatarSize={setting.avatarSize}
		>
			<Richtext size={setting.textSize}>{post.body}</Richtext>

			{post.image && (
				<ImageOverlay
					preset="enlarge"
					buttonLabel="Open image in fullscreen"
					onClick={function (): void {
						throw new Error('Function not implemented.');
					}}
					borderRadius="M"
				>
					<Image {...imgProps} alt={''} />
				</ImageOverlay>
			)}

			<Grid variant="row" gap="M" wrapBelowScreen="md">
				<InteractionButton
					isActive={post.comments && post.comments?.length > 0}
					colorScheme="violet"
					buttonText={
						post.comments && post.comments?.length > 0
							? `${post.comments?.length} Comments`
							: post.comments?.length === 0
							? 'Comment'
							: '1 Comment'
					}
					iconName={post.comments && post.comments?.length > 0 ? 'comment_filled' : 'comment_fillable'}
					onClick={function (): void {
						window.location.href = '/link/to/post';
					}}
				/>
				<InteractionButton
					isActive={post.likes && post.likes?.length > 0}
					colorScheme="pink"
					buttonText={
						post.likes && post.likes?.length > 0
							? `${post.likes?.length} Likes`
							: post.likes?.length === 0
							? 'Like'
							: '1 Like'
					}
					iconName={post.likes && post.likes?.length > 0 ? 'heart_filled' : 'heart_fillable'}
					onClick={function (): void {
						console.log('add like');
						throw new Error('Function not implemented.');
					}}
				/>

				<CopyToClipboardButton
					defaultButtonText="Copy Link"
					activeButtonText="Link copied"
					shareText="/url/to/post"
				/>
			</Grid>
		</UserContentCard>
	);
};
