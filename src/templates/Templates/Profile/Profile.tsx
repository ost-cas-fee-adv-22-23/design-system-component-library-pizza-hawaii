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

import { Header } from '../../Snippets/Header/Header';
import { ProfileHeader } from '../../Snippets/ProfileHeader';
import { ContentCard } from '../../Snippets/ContentCard';

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
		<div className="bg-slate-100">
			<Header user={user} />

			<main className="px-content">
				<section className="mx-auto w-full max-w-content">
					<ProfileHeader user={user} />

					<div className="mb-2 text-slate-900 pr-48">
						<Headline level={3}>{user.fullName}</Headline>
					</div>
					<span className="flex flex-row align-baseline gap-3 mb-3">
						<UserName href={user.profileLink}>{user.userName}</UserName>

						<IconLink as="span" icon="location" colorScheme="slate" size="S">
							{user.city}
						</IconLink>

						<IconLink as="span" icon="calendar" colorScheme="slate" size="S">
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
		</div>
	);
};
