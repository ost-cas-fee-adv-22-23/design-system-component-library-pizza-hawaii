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

type BaseProps = {
	variant: string;
};

type ContentCardType = BaseProps & Post;

export const ContentCard: FC<ContentCardType> = ({ variant, author, createdAt, body }) => {
	const cardStyle = 'flex flex-start justify-center items-start bg-white py-l px-xl relative text-slate-900';

	const preset = {
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
				<div className="mb-6">
					<Image preset="post" />
				</div>
				<div className="flex flex-row items-center gap-12">
					<IconLink as="a" href="#" icon="comment" color="slate" iconState="empty" size="M">
						Comment
					</IconLink>
					<IconLink as="a" href="#" icon="heart" color="slate" iconState="empty" size="M">
						Like
					</IconLink>
					<IconLink as="a" href="#" icon="share" color="slate" size="M">
						Share Link
					</IconLink>
				</div>
			</div>
		</article>
	);
};
