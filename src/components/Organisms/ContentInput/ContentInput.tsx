import React, { FC } from 'react';

import { Grid } from '../../Atoms/Grid/Grid';
import { Headline } from '../../Atoms/Headline/Headline';
import { Label } from '../../Atoms/Label/Label';

import { UserName } from '../../Molecules/UserName/UserName';
import { Button } from '../../Molecules/Button/Button';
import { Card } from '../../Molecules/Card/Card';
import { UserProfile, TUserProfile } from '../../Molecules/UserProfile/UserProfile';

import { User } from '../../../types/User';
import { FormTextarea } from '../../Molecules/Form/FormTextarea/FormTextarea';

type ContentInputPreset = {
	userprofile: { size: TUserProfile['size']; border: TUserProfile['border'] };
	textSize: 'M' | 'L';
	showUserdetails: boolean;
	profileStyle: string;
};

type InputCardType = {
	variant: 'newPost' | 'answerPost';
	headline: string;
	author: User;
	placeHolderText: string;
};

const preset: Record<InputCardType['variant'], ContentInputPreset> = {
	newPost: {
		userprofile: { size: 'M', border: true },
		profileStyle: 'absolute left-0 transform -translate-x-1/2',
		textSize: 'L',
		showUserdetails: false,
	},
	answerPost: {
		userprofile: { size: 'S', border: false },
		profileStyle: 'flex flex-row',
		textSize: 'M',
		showUserdetails: true,
	},
};

export const ContentInput: FC<InputCardType> = (props) => {
	const { variant, placeHolderText, author } = props;

	const setting = preset[variant] || preset.newPost;

	return (
		<Card size="M">
			<Grid variant="col" gap="M">
				<Grid variant="row" gap="S" centerd={true}>
					<div className={setting.profileStyle}>
						<UserProfile
							userName={author.userName}
							userAvatar={author.avatar}
							href={`/user/${author.userName}`}
							{...setting.userprofile}
						/>
					</div>
					<Grid variant="col" gap="S">
						{!setting.showUserdetails && <Headline level={4}>{props.headline}</Headline>}
						{setting.showUserdetails && (
							<>
								<Label as="span" size="M">
									{author.fullName}
								</Label>
								<span className="flex flex-row align-baseline gap-3">
									<UserName href={`/user/${author.userName}`}>{author.userName}</UserName>
								</span>
							</>
						)}
					</Grid>
				</Grid>

				<FormTextarea label={placeHolderText} placeholder={placeHolderText} labelHidden={true} />

				<Grid variant="row" gap="S" wrapBelowScreen="md">
					<Button as="button" color="slate" icon="upload">
						Bild Hochladen
					</Button>
					<Button as="button" color="violet" icon="send">
						Absenden
					</Button>
				</Grid>
			</Grid>
		</Card>
	);
};
