import React, { FC } from "react";

import { Header } from "../../components/Organisms/Header/Header";
import { Headline } from "../../components/Atoms/Headline/Headline";
import ContentCard from "../../components/Organisms/ContentCard/ContentCard";

type BaseProps = {};

export const Timeline: FC<BaseProps> = () => {
	const [user, setUser] = React.useState();
	return (
		<article>
			<Header
				user={user}
			/>

			<section className="mx-auto w-content px-content">
				<div className="mb-2 text-violet-600">
					<Headline level="2">Welcome to Storybook</Headline>
				</div>

				<div className="text-slate-500">
					<Headline level="4" as="p">
						Voluptatem qui cumque voluptatem quia tempora dolores
						distinctio vel repellat dicta.
					</Headline>
				</div>
				<div className="flex gap-4 flex-col mt-8">
					<ContentCard variant="timeline" />
					<ContentCard variant="timeline" />
					<ContentCard variant="timeline" />
					<ContentCard variant="timeline" />
					<ContentCard variant="timeline" />
				</div>
			</section>
		</article>
	);
};
