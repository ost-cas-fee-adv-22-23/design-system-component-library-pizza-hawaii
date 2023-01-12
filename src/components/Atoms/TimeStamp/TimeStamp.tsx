import React, { FC } from 'react';
import moment from 'moment';

/*
 * Type
 */

type TTimeStamp = {
	time: string;
	prefix?: string;
	postfix?: string;
};

export const TimeStamp: FC<TTimeStamp> = ({ time, prefix, postfix }) => {
	const dateTimeAgo = [
		prefix,
		moment(new Date(time))
			.locale('de-ch')
			.fromNow(!!prefix || !!postfix),
		postfix,
	].join(' ');

	const dateTime = moment(new Date(time)).locale('de').format('LLLL');

	return (
		<time dateTime={time} title={dateTime}>
			{dateTimeAgo}
		</time>
	);
};
