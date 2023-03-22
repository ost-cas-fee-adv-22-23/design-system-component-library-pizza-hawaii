import React, { FC } from 'react';

import { Grid } from '../../../components/Atoms/Grid/Grid';
import { Label } from '../../../components/Atoms/Label';

import { UserName } from '../../../components/Molecules/UserName';
import { Button } from '../../../components/Molecules/Button';
import { FormTextarea } from '../../../components/Molecules/Form/FormTextarea';

import { UserContentCard, TUserContentCard } from '../../../components/Organisms/UserContentCard/UserContentCard';

import { User } from '../../../types/User';

type TContentInput = {
	variant: 'newPost' | 'answerPost';
	headline: string;
	author: User;
	placeHolderText: string;
};

type TContentCardvariantMap = {
	headlineSize: 'S' | 'M' | 'L' | 'XL';
	textSize: 'M' | 'L';
	avatarSize: TUserContentCard['avatarSize'];
	avatarVariant: TUserContentCard['avatarVariant'];
};

const ContentInputCardVariantMap: Record<TContentInput['variant'], TContentCardvariantMap> = {
	newPost: {
		headlineSize: 'XL',
		textSize: 'L',
		avatarSize: 'M',
		avatarVariant: 'standalone',
	},
	answerPost: {
		headlineSize: 'M',
		textSize: 'M',
		avatarSize: 'S',
		avatarVariant: 'subcomponent',
	},
};

export const ContentInput: FC<TContentInput> = (props) => {
	const { variant, placeHolderText, author } = props;

	const setting = ContentInputCardVariantMap[variant] || ContentInputCardVariantMap.newPost;

	const headerSlotContent = props.headline ? (
		props.headline
	) : (
		<Grid variant="col" gap="S">
			<Grid variant="col" gap="S">
				<Label as="span" size={setting.headlineSize}>
					{author.fullName}
				</Label>
				<Grid variant="row" gap="S">
					<UserName href={author.profileLink}>{author.userName}</UserName>
				</Grid>
			</Grid>
		</Grid>
	);

	return (
		<UserContentCard
			headline={headerSlotContent}
			userProfile={{
				avatar: author.avatar,
				userName: author.userName,
				href: author.profileLink,
			}}
			avatarVariant={setting.avatarVariant}
			avatarSize={setting.avatarSize}
		>
			<FormTextarea label={placeHolderText} placeholder={placeHolderText} hideLabel={true} size="L" />

			<Grid variant="row" gap="S" wrapBelowScreen="md">
				<Button colorScheme="slate" icon="upload">
					Bild Hochladen
				</Button>
				<Button colorScheme="violet" icon="send">
					Absenden
				</Button>
			</Grid>
		</UserContentCard>
	);
};
