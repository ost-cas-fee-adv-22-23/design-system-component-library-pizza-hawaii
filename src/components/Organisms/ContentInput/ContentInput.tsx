import React, { FC } from 'react';
import { FormInput } from '../../Molecules/Form/FormInput/FormInput';
import '../../../components/Components-base.css';
import { UserProfile, BaseProps as UserProfileProps } from '../../Molecules/UserProfile/UserProfile';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Molecules/TimeStamp/TimeStamp';
import { Headline } from '../../Atoms/Headline/Headline';
import { Label } from '../../Atoms/Label/Label';
import { User } from '../../../types/User';
import { Button } from '../../Molecules/Button/Button';

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
	createdAt: string;
	placeHolderText: string;
};

type InputCardType = BaseProps;

const ContentInput: FC<InputCardType> = (props) => {
	const { headline, variant, placeHolderText, author, createdAt } = props;
	const cardStyle = 'flex flex-start justify-center items-start bg-white py-l px-xl w-full relative text-slate-900';
	const inputFieldStyles = 'h-40';

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
		<div className={[cardStyle, setting.cardStyle].join(' ')}>
			<div className="w-full">
				<div className={setting.sizeStyle + ' mb-4'}>
					<UserProfile {...setting.userprofile} />
					{setting.showUserdetails && (
						<div className={setting.headerStyle}>
							<Label as="span" size={setting.headlineSize}>
								{author.fullName}
							</Label>
							<span className="flex flex-row align-baseline mt-1 gap-3">
								<UserName user={author} />
								<TimeStamp time={createdAt} />
							</span>
						</div>
					)}
					{headline && (
						<Headline level={setting.headlineLevel} as="h4">
							{headline}
						</Headline>
					)}
				</div>
				<div className="inputStyles">
					<FormInput label={placeHolderText} placeholder={placeHolderText} addStyles={inputFieldStyles} />
				</div>
				<div className="flex flex-row py-4 space-x-8">
					<Button as="button" size="M" color="slate" icon="upload" label="Bild Hochladen" />
					<Button as="button" size="M" color="violet" icon="send" label="Absenden" />
				</div>
			</div>
		</div>
	);
};

export default ContentInput;
