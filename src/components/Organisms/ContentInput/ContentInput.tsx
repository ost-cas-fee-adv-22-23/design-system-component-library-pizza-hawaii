import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { FormInput } from '../../Molecules/Form/FormInput/FormInput';
import '../../../components/Components-base.css';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Molecules/TimeStamp/TimeStamp';
import { Headline } from '../../Atoms/Headline/Headline';
import { Label } from '../../Atoms/Label/Label';
import { User } from '../../../types/User';
import { Button } from '../../Molecules/Button/Button';

type BaseProps = {
	variant: string;
	headline: string;
	author: User;
	createdAt: string;
	placeHolderText: string;
};

const ContentInput: FC<BaseProps> = (props) => {
	const { headline, variant, placeHolderText, author, createdAt } = props;
	const cardStyle = 'flex flex-start justify-center items-start bg-white py-l px-xl w-full relative text-slate-900';
	const inputFieldStyles = 'h-40';

	const preset = {
		newPost: {
			userprofile: 'M',
			headlineLevel: 4,
			textSize: 'L',
			showUserdetails: false,
			cardStyle: 'rounded-3xl border-2 border-solid border-white hover:border-slate-300',
			sizeStyle: '-variantNewPost',
		},
		answerPost: {
			userprofile: 'S',
			headlineLevel: 6,
			headlineSize: 'M',
			textSize: 'M',
			showUserdetails: true,
			cardStyle: '',
			sizeStyle: '-variantAnswerPost border-2 border-solid border-white hover:border-slate-300',
			headerStyle: 'flex-col px-2',
		},
	};
	const setting = preset[variant] || preset.newPost;

	return (
		<div className={[cardStyle, setting.cardStyle].join(' ')}>
			<div className="w-full">
				<div className={setting.sizeStyle + ' mb-4'}>
					<UserProfile size={setting.userprofile} user={author} />
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
