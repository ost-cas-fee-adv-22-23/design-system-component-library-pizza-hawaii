/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import '/src/components/Components-base.css';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Molecules/TimeStamp/TimeStamp';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';
import { IconLink } from '../../Molecules/IconLink/IconLink';
import { Image } from '../../Atoms/Image/Image';
import { Richtext } from '../../Atoms/Richtext/Richtext';
import { Label } from '../../Atoms/Label/Label';

import { Post } from '../../../types/Post';

type ContentCardPreset = {
	userprofile: 'S' | 'M' | 'L' | 'XL';
	headlineSize: 'S' | 'M' | 'L' | 'XL';
	textSize: 'M' | 'L';
	cardStyle?: string;
	sizeStyle?: string;
	headerStyle?: string;
};

type BaseProps = {
	variant: 'detailpage' | 'timeline' | 'responsive';
};

type ContentCardType = BaseProps & Post;

export const ContentCard: FC<ContentCardType> = ({ variant, author, createdAt, body, image, comments, likes }) => {
	const cardStyle = 'flex flex-start justify-center items-start bg-white py-l px-xl relative text-slate-900';

	const preset: Record<ContentCardType['variant'], ContentCardPreset> = {
		detailpage: {
			userprofile: 'M',
			headlineSize: 'L',
			textSize: 'L',
			sizeStyle: '-variantDetail',
			cardStyle: 'border-2 border-solid border-white hover:border-slate-300',
		},
		timeline: {
			userprofile: 'M',
			headlineSize: 'M',
			textSize: 'M',
			cardStyle: 'rounded-3xl',
			sizeStyle: '-variantTimeline',
		},
		responsive: {
			userprofile: 'S',
			headlineSize: 'M',
			textSize: 'M',
			cardStyle: 'border-2 border-solid border-white hover:border-slate-200',
			sizeStyle: '-variantResponsive',
			headerStyle: 'flex-col',
		},
	};

	const setting = preset[variant] || preset.detailpage;

	return (
		<article className={[cardStyle, setting.cardStyle].join(' ')}>
			<div>
				<div className={setting.sizeStyle + ' mb-4'}>
					<UserProfile size={setting.userprofile} user={author} />
					<div className={setting.headerStyle}>
						<Label as="span" size={setting.headlineSize}>
							{author.fullName}
						</Label>
						<span className="flex flex-row align-baseline mt-1 gap-3">
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
						size="M"
					>
						{comments && comments.length > 0 ? `${comments.length} comments` : 'Comment'}
					</IconLink>

					<IconLink
						as="a"
						href="#"
						icon="heart"
						color="slate"
						iconState={likes && likes.length > 0 ? 'filled' : 'empty'}
						title={likes && likes.length > 0 ? `${likes.length} likes` : 'No likes'}
						size="M"
					>
						{likes && likes.length > 0 ? `${likes.length} likes` : 'Like'}
					</IconLink>
					<IconLink as="a" href="#" icon="share" color="slate" size="M">
						Share Link
					</IconLink>
				</div>
				{/* {comments && comments.length > 0 && (<div className="mt-6">
					{comments.map((comment) => (
						<ContentCard variant="responsive" {...comment} />
					)}
				</div>)} */}
			</div>
		</article>
	);
};
