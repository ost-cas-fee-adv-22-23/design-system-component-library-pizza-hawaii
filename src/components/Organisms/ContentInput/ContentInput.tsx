import React, { FC } from 'react';

import { UserProfile, BaseProps as UserProfileProps } from '../../Molecules/UserProfile/UserProfile';
import { UserName } from '../../Molecules/UserName/UserName';
import { Headline } from '../../Atoms/Headline/Headline';
import { Label } from '../../Atoms/Label/Label';
import { Button } from '../../Molecules/Button/Button';
import { Card } from '../../Molecules/Card/Card';

import { User } from '../../../types/User';
import { FormTextarea } from '../../Molecules/Form/FormTextarea/FormTextarea';

type ContentInputPreset = {
	userprofile: UserProfileProps;
	textSize: 'M' | 'L';
	showUserdetails: boolean;
	cardStyle: string;
	profileStyle: string;
	headerStyle?: string;
	sizeStyle?: string;
};

type InputCardType = {
	variant: 'newPost' | 'answerPost';
	headline: string;
	author: User;
	placeHolderText: string;
};

export const ContentInput: FC<InputCardType> = (props) => {
	const { variant, placeHolderText, author } = props;

	const preset: Record<InputCardType['variant'], ContentInputPreset> = {
		newPost: {
			userprofile: { size: 'M', border: true, user: author, href: `/user/${author.userName}` },
			profileStyle: 'inline-flex absolute left-0 transform -translate-x-1/2',
			textSize: 'L',
			showUserdetails: false,
			cardStyle: 'rounded-3xl border-2 border-solid border-white hover:border-slate-300',
		},
		answerPost: {
			userprofile: { size: 'S', border: false, user: author, href: `/user/${author.userName}` },
			profileStyle: 'flex flex-row',
			textSize: 'M',
			showUserdetails: true,
			headerStyle: 'flex-col px-2',
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
						{!setting.showUserdetails && <Headline level={4}>{props.headline}</Headline>}
						{setting.showUserdetails && (
							<>
								<Label as="span" size="M">
									{author.fullName}
								</Label>
								<span className="flex flex-row align-baseline gap-3">
									<UserName user={author} />
								</span>
							</>
						)}
					</div>
				</div>

				<div className="mb-4">
					<FormTextarea label={placeHolderText} placeholder={placeHolderText} labelHidden={true} />
				</div>

				<div className="flex flex-row gap-4">
					<Button as="button" color="slate" icon="upload">
						Bild Hochladen
					</Button>
					<Button as="button" color="violet" icon="send">
						Absenden
					</Button>
				</div>
			</div>
		</Card>
	);
};
