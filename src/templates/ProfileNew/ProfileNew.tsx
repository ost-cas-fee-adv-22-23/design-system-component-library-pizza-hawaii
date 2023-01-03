import React, { FC } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { Headline } from '../../components/Atoms/Headline/Headline';
import { Image } from '../../components/Atoms/Image/Image';

import { UserProfile } from '../../components/Molecules/UserProfile/UserProfile';
import { UserCard } from '../../components/Organisms/UserCard';
import { ContentCard } from '../../components/Organisms/ContentCard/ContentCard';

import { UserName } from '../../components/Molecules/UserName/UserName';
import { TimeStamp } from '../../components/Molecules/TimeStamp/TimeStamp';
import { IconLink } from '../../components/Molecules/IconLink/IconLink';

import { Post as PostType } from '../../types/Post';
import { User as UserType } from '../../types/User';

type ProfileNewType = {
	user: UserType;
	promotedPosts: PostType[];
	promotedUsers: UserType[];
};

export const ProfileNew: FC<ProfileNewType> = ({ user, promotedPosts, promotedUsers }) => {
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
							{user.city || 'Location'}
						</IconLink>
						<TimeStamp time={user.createdAt} prefix="Mitglied seit" icon="calendar" />
					</span>

					<div className="mb-2 text-slate-600">
						<Headline level={3}>Empfohlene User</Headline>
					</div>
					<div className="mb-8">
						<div className="flex flex-row flex-wrap -m-2">
							{promotedUsers &&
								promotedUsers.map((user) => {
									return (
										<div className="flex-initial w-4/12 p-2">
											<UserCard key={user.userName} user={user} />
										</div>
									);
								})}
						</div>
					</div>

					<div className="mb-2 text-slate-600">
						<Headline level={3}>Empfohlene Mumbles</Headline>
					</div>
					<div className="flex gap-4 flex-col mb-8">
						{promotedPosts &&
							promotedPosts
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
