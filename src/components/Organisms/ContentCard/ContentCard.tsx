/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Card } from '../../Molecules/Card/Card';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Molecules/TimeStamp/TimeStamp';
import { UserProfile, BaseProps as UserProfileProps } from '../../Molecules/UserProfile/UserProfile';
import { IconLink } from '../../Molecules/IconLink/IconLink';
import { Image } from '../../Atoms/Image/Image';
import { Richtext } from '../../Atoms/Richtext/Richtext';
import { Label } from '../../Atoms/Label/Label';

import { Post } from '../../../types/Post';

type ContentCardPreset = {
	userprofile: UserProfileProps;
	headlineSize: 'S' | 'M' | 'L' | 'XL';
	textSize: 'M' | 'L';
	cardStyle?: string;
	profileStyle?: string;
};

type BaseProps = {
	variant: 'detailpage' | 'timeline' | 'responsive';
};

type ContentCardType = BaseProps & Post;

export const ContentCard: FC<ContentCardType> = ({ variant, author, createdAt, body, image, comments, likes }) => {
	const preset: Record<ContentCardType['variant'], ContentCardPreset> = {
		detailpage: {
			userprofile: { size: 'M', border: true, user: author, href: `/user/${author.userName}` },
			headlineSize: 'XL',
			textSize: 'L',
			profileStyle: '',
			cardStyle: 'border-2 border-solid border-white hover:border-slate-300',
		},
		timeline: {
			userprofile: { size: 'M', border: true, user: author, href: `/user/${author.userName}` },
			headlineSize: 'L',
			textSize: 'M',
			profileStyle: 'inline-flex absolute left-0 transform -translate-x-1/2',
			cardStyle: 'rounded-3xl',
		},
		responsive: {
			userprofile: { size: 'S', border: false, user: author, href: `/user/${author.userName}` },
			headlineSize: 'M',
			textSize: 'M',
			cardStyle: 'border-2 border-solid border-white hover:border-slate-200',
			profileStyle: 'inline-flex',
		},
	};

	const setting = preset[variant] || preset.detailpage;

	return (
		<Card as="article" rounded={variant !== 'responsive'} size="M">
			<div>
				<div className="mb-4 flex items-center gap-2">
					<div className={setting.profileStyle}>
						<UserProfile {...setting.userprofile} />
					</div>
					<div className="flex flex-col gap-2">
						<Label as="span" size={setting.headlineSize}>
							{author.fullName}
						</Label>
						<span className="flex flex-row align-baseline gap-3">
							<UserName user={author} />
							<TimeStamp time={createdAt} />
						</span>
					</div>
				</div>
				<div className="mb-6">
					<Richtext size={setting.textSize}>{body}</Richtext>
				</div>
				{image && (
					<div className="mb-6">
						<Image preset="post" src={image} />
					</div>
				)}
				<div className="flex flex-row items-center gap-12">
					<IconLink
						as="a"
						href="#"
						icon="comment"
						color="slate"
						iconState={comments && comments.length > 0 ? 'filled' : 'empty'}
						title={comments && comments.length > 0 ? `${comments.length} comments` : 'No comments'}
					>
						{comments && comments.length > 0 ? `${comments.length} comments` : 'Comment'}
					</IconLink>

					<IconLink
						as="a"
						href="#"
						icon="heart"
						color="pink"
						iconState={likes && likes.length > 0 ? 'filled' : 'empty'}
						title={likes && likes.length > 0 ? `${likes.length} likes` : 'No likes'}
					>
						{likes && likes.length > 0 ? `${likes.length} likes` : 'Like'}
					</IconLink>

					<IconLink as="a" href="#" icon="share" color="slate">
						Share Link
					</IconLink>
				</div>
			</div>
		</Card>
	);
};
