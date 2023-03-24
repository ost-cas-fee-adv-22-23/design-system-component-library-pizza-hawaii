import React, { FC } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Headline } from '../../../components/Atoms/Headline/Headline';
import { Richtext } from '../../../components/Atoms/Richtext';
import { TimeStamp } from '../../../components/Atoms/TimeStamp';

import { IconText } from '../../../components/Molecules/IconText';

import { Header } from '../../Snippets/Header';
import { ProfileHeader } from '../../Snippets/ProfileHeader';
import { UserCard } from '../../Snippets/UserCard';
import { ContentInput } from '../../Snippets/ContentInput';
import { ContentCard } from '../../Snippets/ContentCard';

import { Post as PostType } from '../../../types/Post';
import { User as UserType } from '../../../types/User';

type ProfileNewType = {
	user: UserType;
	promotedPosts: PostType[];
	promotedUsers: UserType[];
};

export const ProfileNew: FC<ProfileNewType> = ({ user, promotedPosts, promotedUsers }) => {
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
							{user.city || 'Location'}
						</IconText>
						<IconText icon="calendar" colorScheme="slate" size="S">
							<TimeStamp date={user.createdAt} prefix="Mitglied seit" />
						</IconText>
					</span>

					<div className="text-slate-400 mb-8">
						<Richtext size="M">{user.bio || 'Schreibe etwas über dich!'}</Richtext>
					</div>

					<Grid variant="col" gap="M" marginBelow="M">
						<ContentInput
							author={user}
							variant="newPost"
							headline="Voll leer hier! 😲"
							placeHolderText="Und was meinst du dazu?"
						/>
					</Grid>

					<div className="mb-2 text-slate-600">
						<Headline level={3}>Empfohlene User</Headline>
					</div>
					<div className="mb-8">
						<div className="flex flex-row flex-wrap -m-2">
							{promotedUsers &&
								promotedUsers.map((user, index) => {
									return (
										<div className="flex-initial w-4/12 p-2" key={`user-${user.userName}${index}`}>
											<UserCard user={user} />
										</div>
									);
								})}
						</div>
					</div>

					<div className="mb-2 text-slate-600">
						<Headline level={3}>Empfohlene Mumbles</Headline>
					</div>
					<Grid variant="col" gap="M" marginBelow="M">
						{promotedPosts &&
							promotedPosts
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
