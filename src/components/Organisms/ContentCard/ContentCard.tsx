/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';

import { Card } from '../../Molecules/Card/Card';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Atoms/TimeStamp/TimeStamp';
import { UserProfile, TUserProfile } from '../../Molecules/UserProfile/UserProfile';
import { IconLink } from '../../Molecules/IconLink/IconLink';
import { Image } from '../../Atoms/Image/Image';
import { Richtext } from '../../Atoms/Richtext/Richtext';
import { Label } from '../../Atoms/Label/Label';

import { Post } from '../../../types/Post';

type ContentCardPreset = {
	userprofile: { size: TUserProfile['size']; border: TUserProfile['border'] };
	headlineSize: 'S' | 'M' | 'L' | 'XL';
	textSize: 'M' | 'L';
	cardStyle?: string;
	profileStyle?: string;
};

type BaseProps = {
	variant: 'detailpage' | 'timeline' | 'responsive';
};

type ContentCardType = BaseProps & Post;

const preset: Record<ContentCardType['variant'], ContentCardPreset> = {
	detailpage: {
		userprofile: { size: 'M', border: true },
		headlineSize: 'XL',
		textSize: 'L',
		profileStyle: '',
		cardStyle: 'border-2 border-solid border-white hover:border-slate-300',
	},
	timeline: {
		userprofile: { size: 'M', border: true },
		headlineSize: 'L',
		textSize: 'M',
		profileStyle: 'inline-flex absolute left-0 transform -translate-x-1/2',
		cardStyle: 'rounded-3xl',
	},
	responsive: {
		userprofile: { size: 'S', border: false },
		headlineSize: 'M',
		textSize: 'M',
		cardStyle: 'border-2 border-solid border-white hover:border-slate-200',
		profileStyle: 'inline-flex',
	},
};

export const ContentCard: FC<ContentCardType> = ({ variant, author, createdAt, body, image, comments, likes }) => {
	const setting = preset[variant] || preset.detailpage;

	return (
		<Card as="article" rounded={variant !== 'responsive'} size="M">
			<div>
				<div className="mb-4 flex items-center gap-2">
					<div className={setting.profileStyle}>
						<UserProfile
							userName={author.userName}
							userAvatar={author.avatar}
							href={`/user/${author.userName}`}
							{...setting.userprofile}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label as="span" size={setting.headlineSize}>
							{author.fullName}
						</Label>
						<span className="flex flex-row align-baseline gap-3">
							<UserName href={`/user/${author.userName}`}>{author.userName}</UserName>
							<IconLink as="span" icon="calendar" color="slate" size="S">
								<TimeStamp date={createdAt} />
							</IconLink>
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
						icon={likes && likes.length > 0 ? 'comment_filled' : 'comment_fillable'}
						color="slate"
						title={comments && comments.length > 0 ? `${comments.length} comments` : 'No comments'}
					>
						{comments && comments.length > 0 ? `${comments.length} comments` : 'Comment'}
					</IconLink>

					<IconLink
						as="a"
						href="#"
						icon={likes && likes.length > 0 ? 'heart_filled' : 'heart_fillable'}
						color="pink"
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
