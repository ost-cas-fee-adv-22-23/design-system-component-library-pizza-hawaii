/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { TimeStamp } from '../../../components/Atoms/TimeStamp';
import { Image } from '../../../components/Atoms/Image';
import { Richtext } from '../../../components/Atoms/Richtext';
import { Label } from '../../../components/Atoms/Label';

import { UserName } from '../../../components/Molecules/UserName';
import { IconLink } from '../../../components/Molecules/IconLink';
import { ImageOverlay } from '../../../components/Molecules/ImageOverlay';

import { UserContentCard, TUserContentCard } from '../../../components/Organisms/UserContentCard/UserContentCard';

import { Post } from '../../../types/Post';
import { InteractionButton } from '../../../components/Molecules/InteractionButton';
import { ActiveButton } from '../../../components/Molecules/ActiveButton';

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
				<UserName href={post.author.profileLink}>{post.author.userName}</UserName>
				<IconLink as="span" icon="calendar" color="slate" size="S">
					<TimeStamp date={post.createdAt} />
				</IconLink>
			</Grid>
		</Grid>
	);

	return (
		<UserContentCard
			headline={headerSlotContent}
			userProfile={post.author}
			avatarVariant={setting.avatarVariant}
			avatarSize={setting.avatarSize}
		>
			<Richtext size={setting.textSize}>{post.body}</Richtext>

			{post.image && (
				<ImageOverlay
					icon="fullscreen"
					onClick={function (): void {
						throw new Error('Function not implemented.');
					}}
				>
					<Image preset="post" src={post.image} />
				</ImageOverlay>
			)}

			<Grid variant="row" gap="M">
				<InteractionButton
					count={post.comments?.length}
					colorScheme="violet"
					iconNameSingle="comment_fillable"
					iconNamePlural="comment_filled"
					buttonTextSingular="Comment"
					buttonTextPlural="Comments"
				/>
				<InteractionButton
					count={post.likes?.length}
					colorScheme="pink"
					buttonTextSingular="Like"
					buttonTextPlural="Likes"
					iconNameSingle="heart_fillable"
					iconNamePlural="heart_filled"
				/>
				<ActiveButton
					colorScheme="slate"
					buttonInitialText="Copy Link"
					buttonActiveText="Link copied"
					isActive={false}
				/>
			</Grid>
		</UserContentCard>
	);
};
