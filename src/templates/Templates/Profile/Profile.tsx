import React, { ChangeEvent, FC, useState } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Headline } from '../../../components/Atoms/Headline/Headline';
import { Richtext } from '../../../components/Atoms/Richtext';

import { Switch } from '../../../components/Molecules/Switch';
import { TimeStamp } from '../../../components/Atoms/TimeStamp';
import { IconText } from '../../../components/Molecules/IconText';

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

	const postsToRender: Record<string, PostType[]> = {
		mumbles: posts.filter((p) => p.author === user),
		likes: posts.filter((p) => p.likes?.includes(user)),
	};

	return (
		<>
			<Header user={user} />

			<main className="px-content">
				<section className="mx-auto w-full max-w-content">
					<ProfileHeader user={user} />

					<div className="mb-2 pr-48">
						<Headline level={3}>{user.fullName}</Headline>
					</div>
					<span className="flex flex-row align-baseline gap-3 mb-3">
						<a href={user.profileLink}>
							<IconText icon="profile" colorScheme="violet" size="S">
								{user.userName}
							</IconText>
						</a>

						<IconText icon="location" colorScheme="slate" size="S">
							{user.city}
						</IconText>

						<IconText icon="calendar" colorScheme="slate" size="S">
							<TimeStamp date={user.createdAt} prefix="Mitglied seit" />
						</IconText>
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
		</>
	);
};
