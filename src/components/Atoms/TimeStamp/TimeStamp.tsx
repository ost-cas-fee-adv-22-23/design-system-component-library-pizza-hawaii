import React, { FC } from 'react';
import moment from 'moment';

/*
 * Type
 */

type TTimeStamp = {
	date: Date | string;
	prefix?: string;
	postfix?: string;
	showTitle?: boolean;
};

export const TimeStamp: FC<TTimeStamp> = ({ date: inputDate, prefix, postfix, showTitle = true }) => {
	const date = new Date(inputDate);

	// Date-Ago format
	const dateTimeAgo = [
		prefix,
		moment(date)
			.locale('de-ch')
			.fromNow(!!prefix || !!postfix),
		postfix,
	].join(' ');

	// Readable exact time
	const dateTime = moment(date).locale('de').format('LLLL');

	const props = {
		dateTime: date.toISOString(),
		title: showTitle ? dateTime : undefined,
	};

	return <time {...props}>{dateTimeAgo}</time>;
};
