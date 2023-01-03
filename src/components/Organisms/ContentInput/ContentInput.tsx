import React, { FC } from 'react';
import '../../../components/Components-base.css';
import { UserProfile, BaseProps as UserProfileProps } from '../../Molecules/UserProfile/UserProfile';
import { UserName } from '../../Molecules/UserName/UserName';
import { Label } from '../../Atoms/Label/Label';
import { Button } from '../../Molecules/Button/Button';
import { Card } from '../../Molecules/Card/Card';

import { User } from '../../../types/User';
import { FormTextarea } from '../../Molecules/Form/FormTextarea/FormTextarea';

type ContentInputPreset = {
	headlineLevel: 1 | 2 | 3 | 4;
	userprofile: UserProfileProps;
	textSize: 'M' | 'L';
	showUserdetails: boolean;
	cardStyle: string;
	profileStyle: string;
	headerStyle?: string;
	sizeStyle?: string;
	headlineSize?: 'M' | 'L';
};

type BaseProps = {
	variant: 'newPost' | 'answerPost';
	headline: string;
	author: User;
	placeHolderText: string;
};

type InputCardType = BaseProps;

export const ContentInput: FC<InputCardType> = (props) => {
	const { variant, placeHolderText, author } = props;

	const preset: Record<InputCardType['variant'], ContentInputPreset> = {
		newPost: {
			headlineLevel: 4,
			userprofile: { size: 'M', border: true, user: author, href: `/user/${author.userName}` },
			profileStyle: 'inline-flex absolute left-0 transform -translate-x-1/2',
			textSize: 'L',
			showUserdetails: false,
			cardStyle: 'rounded-3xl border-2 border-solid border-white hover:border-slate-300',
		},
		answerPost: {
			headlineLevel: 2,
			userprofile: { size: 'S', border: false, user: author, href: `/user/${author.userName}` },
			profileStyle: 'flex flex-row',
			textSize: 'M',
			showUserdetails: true,
			headerStyle: 'flex-col px-2',
			headlineSize: 'M',
			cardStyle: '',
			sizeStyle: 'flex flex-row border-2 border-solid border-white hover:border-slate-300',
		},
	};
	const setting = preset[variant] || preset.newPost;

	return (
		<Card size="M">
			<div className="w-full">
				<div className="mb-4 flex items-center gap-2">
					<div className={setting.profileStyle}>
						<UserProfile {...setting.userprofile} />
					</div>
					<div className="flex flex-col gap-2">
						<Label as="span" size={setting.headlineSize}>
							{author.fullName}
						</Label>
						<span className="flex flex-row align-baseline gap-3">
							<UserName user={author} />
						</span>
					</div>
				</div>

				<div className="inputStyles">
					<FormTextarea label={placeHolderText} placeholder={placeHolderText} labelHidden={true} />
				</div>
				<div className="flex flex-row py-4 space-x-8">
					<Button as="button" size="M" color="slate" icon="upload" label="Bild Hochladen" />
					<Button as="button" size="M" color="violet" icon="send" label="Absenden" />
				</div>
			</div>
		</Card>
	);
};
