import React, { ChangeEvent, FC, useState } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Headline } from '../../../components/Atoms/Headline/Headline';
import { Image } from '../../../components/Atoms/Image';
import { Richtext } from '../../../components/Atoms/Richtext';

import { Switch } from '../../../components/Molecules/Switch';
import { UserProfile } from '../../../components/Molecules/UserProfile';
import { UserName } from '../../../components/Molecules/UserName';
import { TimeStamp } from '../../../components/Atoms/TimeStamp';
import { IconLink } from '../../../components/Molecules/IconLink';

import { ContentCard } from '../../Snippets/ContentCard/ContentCard';
import { Header } from '../../Snippets/Header/Header';

import { Post as PostType } from '../../../types/Post';
import { User as UserType } from '../../../types/User';

type ProfileType = {
	user: UserType;
	posts: PostType[];
};

export const Profile: FC<ProfileType> = ({ user, posts = [] }) => {
	const [currentPostType, setCurrentPostType] = useState('mumbles');

	const setPostType = setCurrentPostType.bind(this);

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
							<UserProfile
								userName={user.userName}
								avatar={user.avatar}
								size="XL"
								border={true}
								href="/"
								buttonLabel="Profil bearbeiten"
							/>
						</div>
					</div>
					<div className="mb-2 text-slate-900 pr-48">
						<Headline level={3}>{user.fullName}</Headline>
					</div>
					<span className="flex flex-row align-baseline gap-3 mb-3">
						<UserName href={`/user/${user.userName}`}>{user.userName}</UserName>

						<IconLink as="span" icon="location" color="slate" size="S">
							{user.city}
						</IconLink>

						<IconLink as="span" icon="calendar" color="slate" size="S">
							<TimeStamp date={user.createdAt} prefix="Mitglied seit" />
						</IconLink>
					</span>

					<div className="text-slate-400 mb-8">
						<Richtext size="M">{user.bio}</Richtext>
					</div>

					<Grid variant="col" gap="M" marginBelow="M">
						<Switch
							label="Wechsle deine angezeigten Mumbles"
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
							onChange={(event: ChangeEvent): void => {
								const value = (event.target as HTMLInputElement).value;
								setCurrentPostType(value);
							}}
						/>
					</Grid>

					<Grid variant="col" gap="M" marginBelow="M">
						{postsToRender[currentPostType] &&
							postsToRender[currentPostType]
								.sort((a: PostType, b: PostType) => {
									return new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1;
								})
								.map((post) => {
									return <ContentCard key={post.id} variant="timeline" post={post} />;
								})}
					</Grid>
				</section>
			</main>
		</article>
	);
};
