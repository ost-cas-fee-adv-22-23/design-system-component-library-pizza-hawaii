'use client';
import React, { FC, useState, useEffect } from 'react';
import moment from 'moment';

/*
 * Type
 */

export type TTimeStamp = {
	/**
	 * date: Date as a Date-object or a string - will be converted to a Date-object
	 */
	date: Date | string;

	/**
	 *  optional: prefix: string rendered before the actual timestamp value (examples: 'Mitglied seit' => 'Mitglied seit 5 Stunden')
	 */
	prefix?: string;

	/**
	 * optional: postfix: sting rendered after the actual timestamp value (examples: 'bis zur Deadline' => '5 Stunden bis zur Deadline')
	 */
	postfix?: string;

	/**
	 * optional: showTitle: true if you like to show a title on hover
	 */
	showTitle?: boolean;

	/**
	 * optional: locale: string for the moment.js locale
	 * @default: 'de-ch'
	 * @see https://momentjs.com/docs/#/i18n/
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
	 */

	locale?: string;
};

/**
 * Typography for TimeStamp Component
 *
 * @param {Date | string} date - date: Date as a Date-object or a string - will be converted to a Date-object
 * @param {string} prefix - optional: prefix: string rendered before the actual timestamp value (examples: 'Mitglied seit' => 'Mitglied seit 5 Stunden')
 * @param {string} postfix - optional: postfix: sting rendered after the actual timestamp value (examples: 'bis zur Deadline' => '5 Stunden bis zur Deadline')
 * @param {boolean} showTitle - optional: showTitle: true if you like to show a title on hover
 * @param {string} locale - optional: locale: string for the moment.js locale
 *
 * @example TimeStamp date={new Date()} prefix='Mitglied seit' postfix='bis zur Deadline' showTitle={true} locale='de-ch' />
 */

export const TimeStamp: FC<TTimeStamp> = ({ date: inputDate, prefix, postfix, showTitle = true, locale = 'de-ch' }) => {
	const [dateTimeAgo, setDateTimeAgo] = useState('');
	const [dateTime, setDateTime] = useState('');
	const [dateTimeISOString, setDateTimeISOString] = useState('');

	useEffect(() => {
		const date = new Date(inputDate);

		// Readable relative time
		const dateTimeAgo = [
			prefix,
			moment(date)
				.locale(locale)
				.fromNow(!!prefix || !!postfix),
			postfix,
		].join(' ');
		setDateTimeAgo(dateTimeAgo);

		// Readable exact time
		const dateTime = moment(date).locale(locale).format('LLLL');
		setDateTime(dateTime);

		// ISO String
		const dateTimeISOString = date.toISOString();
		setDateTimeISOString(dateTimeISOString);
	}, []);

	const props = {
		dateTime: dateTimeISOString,
		title: showTitle ? dateTime : undefined,
	};

	return <time {...props}>{dateTimeAgo}</time>;
};
