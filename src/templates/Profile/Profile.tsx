import React, { FC, useState } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { Headline } from '../../components/Atoms/Headline/Headline';
import { Image } from '../../components/Atoms/Image/Image';
import { Switch } from '../../components/Molecules/Switch/Switch';
import { UserProfile } from '../../components/Molecules/UserProfile/UserProfile';
import { ContentCard } from '../../components/Organisms/ContentCard/ContentCard';

import { Post as PostType } from '../../types/Post';
import { User as UserType } from '../../types/User';
import { Richtext } from '../../components/Atoms/Richtext/Richtext';
import { UserName } from '../../components/Molecules/UserName/UserName';
import { TimeStamp } from '../../components/Molecules/TimeStamp/TimeStamp';
import { IconLink } from '../../components/Molecules/IconLink/IconLink';

type ProfileType = {
	user: UserType;
	posts: PostType[];
};

export const Profile: FC<ProfileType> = ({ user, posts = [] }) => {
	const [currentPostType, setCurrentPostType] = useState('mumbles');

	const postsToRender: Record<string, PostType[]> = {
		mumbles: posts.filter((p) => p.author === user),
		likes: posts.filter((p) => p.likes?.includes(user)),
	};

	return (
		<article className="bg-slate-100">
			<Header user={user} />

			<main className="px-content">
				<section className="mx-auto w-full max-w-content">
					<div className="relative mb-6">
						<Image src={user.posterImage} alt={user.userName} preset="header" />
						<div className="absolute right-8 bottom-0 translate-y-1/2">
							<UserProfile user={user} size="XL" border={true} href="/" />
						</div>
					</div>
					<div className="mb-2 text-slate-900 pr-48">
						<Headline level={3}>{user.fullName}</Headline>
					</div>
					<span className="flex flex-row align-baseline gap-3 mb-3">
						<UserName user={user} />

						<IconLink as="span" icon="location" color="slate" size="S">
							{user.city}
						</IconLink>

						<TimeStamp time={user.createdAt} prefix="Mitglied seit" icon="calendar" />
					</span>

					<div className="text-slate-400 mb-8">
						<Richtext size="M">{user.bio}</Richtext>
					</div>

					<div className="flex gap-4 flex-col mb-8">
						<Switch
							options={[
								{
									label: 'Meine Mumbles',
									value: 'mumbles',
								},
								{
									label: 'Meine Likes',
									value: 'likes',
								},
							]}
							value="mumbles"
							name="posttype"
							onChange={(value: string): void => {
								setCurrentPostType(value);
							}}
						/>
					</div>

					<div className="flex gap-4 flex-col mb-8">
						{postsToRender[currentPostType] &&
							postsToRender[currentPostType]
								.sort((a: PostType, b: PostType) => {
									return new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1;
								})
								.map((post) => {
									return <ContentCard key={post.id} variant="timeline" {...post} />;
								})}
					</div>
				</section>
			</main>
		</article>
	);
};
