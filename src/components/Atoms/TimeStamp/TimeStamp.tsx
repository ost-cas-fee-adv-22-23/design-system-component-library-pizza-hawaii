import React, { FC } from 'react';
import moment from 'moment';

/*
 * Type
 */

export type TTimeStamp = {
	/**
	 * provide a Date Object or a string
	 * @default:
	 * @type Date
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
	 */
	date: Date | string;
	/**
	 * optional: prefix: text-string rendered before the actual timestamp value (examples: 'vor', 'seit')
	 */
	prefix?: string;
	/**
	 * optional: postfix: text-sting rendered after the actual timestamp value (examples: 'bis zur Deadline')
	 */
	postfix?: string;
	/**
	 * optional: show a title option. Boolean or undefined.
	 */
	showTitle?: boolean;
};

/*
 * Styles
 */
/**
 * Typography for TimeStamp Component
 * @param { Date } Date as a Date-object or a string - will be converted to a string
 * @param { prefix } text -string rendered before the actual timestamp value
 * @param { postfix } text text-sting rendered after the actual timestamp value (examples: 'until doomsday')
 * @param { showTitle } boolean optional: if you like to add a title
 * @example
 * return (
 *		<TimeStamp date="2022-10-25T16:00:00Z" prefix="Deadline: " />
 * )
 */

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
