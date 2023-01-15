/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { TimeStamp } from '../../../components/Atoms/TimeStamp';
import { Image } from '../../../components/Atoms/Image';
import { Richtext } from '../../../components/Atoms/Richtext';
import { Label } from '../../../components/Atoms/Label';

import { UserName } from '../../../components/Molecules/UserName';
import { IconLink } from '../../../components/Molecules/IconLink';

import { UserContentCard, TUserContentCard } from '../../../components/Organisms/UserContentCard/UserContentCard';

import { Post } from '../../../types/Post';

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

			{post.image && <Image preset="post" src={post.image} />}

			<Grid variant="row" gap="M">
				<IconLink
					as="a"
					href="#"
					icon={post.likes && post.likes.length > 0 ? 'comment_filled' : 'comment_fillable'}
					color="slate"
					title={post.comments && post.comments.length > 0 ? `${post.comments.length} comments` : 'No comments'}
				>
					{post.comments && post.comments.length > 0 ? `${post.comments.length} comments` : 'Comment'}
				</IconLink>

				<IconLink
					as="a"
					href="#"
					icon={post.likes && post.likes.length > 0 ? 'heart_filled' : 'heart_fillable'}
					color="pink"
					title={post.likes && post.likes.length > 0 ? `${post.likes.length} likes` : 'No likes'}
				>
					{post.likes && post.likes.length > 0 ? `${post.likes.length} likes` : 'Like'}
				</IconLink>

				<IconLink as="a" href="#" icon="share" color="slate">
					Share Link
				</IconLink>
			</Grid>
		</UserContentCard>
	);
};
