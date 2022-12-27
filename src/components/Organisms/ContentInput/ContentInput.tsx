import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../../Molecules/Form/FormInput/FormInput';
import '../../../components/Components-base.css';
import { UserProfile } from '../../Molecules/UserProfile/UserProfile';
import { UserName } from '../../Molecules/UserName/UserName';
import { TimeStamp } from '../../Molecules/TimeStamp/TimeStamp';

type BaseProps = {};

const ContentInput: FC<BaseProps> = (props) => {
	console.log('content input props', props);
	const { label, variant, author, createdAt } = props;
	const showUserProfile = variant === 'AnswerPost' ? true : false;
	const inputStyles = 'flex flex-start justify-center items-start bg-white py-l px-xl relative text-slate-900';
  const cardStyles = 'h-40'

	return (
		<>
			{showUserProfile && (
				<div>
					<UserProfile size={'S'} user={author} />
					<div>
						<span className="flex flex-row align-baseline mt-1 gap-3">
							<UserName user={author} />
							<TimeStamp time={createdAt} />
						</span>
					</div>
				</div>
			)}
		<div className="inputStyles">
			<FormInput label={label} cardStyles={cardStyles} />
		</div>
	</>
	);
};

export default ContentInput;
