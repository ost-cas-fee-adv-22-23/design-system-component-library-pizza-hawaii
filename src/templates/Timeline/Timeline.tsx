import React, { FC } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { Headline } from '../../components/Atoms/Headline/Headline';
import { ContentCard } from '../../components/Organisms/ContentCard/ContentCard';

import { Post as PostType } from '../../types/Post';
import { User as UserType } from '../../types/User';

type BaseProps = {
	user: UserType;
	posts: PostType[];
};

export const Timeline: FC<BaseProps> = ({ user, posts = [] }) => {
	return (
		<article>
			<Header user={user} />

			<main className="px-content">
				<section className="mx-auto w-full max-w-content">
					<div className="mb-2 text-violet-600">
						<Headline level="2">Welcome to Storybook</Headline>
					</div>

					<div className="text-slate-500">
						<Headline level="4" as="p">
							Voluptatem qui cumque voluptatem quia tempora dolores distinctio vel repellat dicta.
						</Headline>
					</div>
					<div className="flex gap-4 flex-col mt-8">
						{posts &&
							posts.map((post) => {
								return <ContentCard key={post.id} variant="timeline" {...post} />;
							})}
					</div>
				</section>
			</main>
		</article>
	);
};
