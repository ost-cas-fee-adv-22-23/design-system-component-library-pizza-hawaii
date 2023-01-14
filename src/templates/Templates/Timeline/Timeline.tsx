import React, { FC } from 'react';

import { Header } from '../../Snippet/Header/Header';
import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Headline } from '../../../components/Atoms/Headline/Headline';
import { ContentCard } from '../../Snippet/ContentCard/ContentCard';
import { ContentInput } from '../../Snippet/ContentInput/ContentInput';

import { Post as PostType } from '../../../types/Post';
import { User as UserType } from '../../../types/User';

type TimelineType = {
	user: UserType;
	posts: PostType[];
};

export const Timeline: FC<TimelineType> = ({ user, posts = [] }) => {
	return (
		<article className="bg-slate-100">
			<Header user={user} />

			<main className="px-content">
				<section className="mx-auto w-full max-w-content">
					<div className="mb-2 text-violet-600">
						<Headline level={2}>Welcome to Storybook</Headline>
					</div>

					<div className="text-slate-500 mb-8">
						<Headline level={4} as="p">
							Voluptatem qui cumque voluptatem quia tempora dolores distinctio vel repellat dicta.
						</Headline>
					</div>

					<Grid variant="col" gap="M" marginBelow="M">
						<ContentInput
							variant="newPost"
							headline="Hey, was geht ab?"
							author={user}
							placeHolderText="Deine Meinung zählt"
						/>

						{posts &&
							posts
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
