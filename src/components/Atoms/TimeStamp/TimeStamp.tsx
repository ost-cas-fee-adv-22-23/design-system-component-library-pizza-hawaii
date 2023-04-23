import React, { FC } from 'react';
import { format, formatDistance, Locale } from 'date-fns';
import { de, enUS } from 'date-fns/locale';
/*
 * Type
 */

type TTimeStamp = {
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
	 * optional: locale: string for the locale (de or en)
	 * @default: 'de'
	 */

	locale?: string;
};

const localeMapping: Record<string, Locale> = {
	de: de,
	en: enUS,
};

/**
 * Typography for TimeStamp Component
 *
 * @param {Date | string} date - date: Date as a Date-object or a string - will be converted to a Date-object
 * @param {string} prefix - optional: prefix: string rendered before the actual timestamp value (examples: 'Mitglied seit' => 'Mitglied seit 5 Stunden')
 * @param {string} postfix - optional: postfix: sting rendered after the actual timestamp value (examples: 'bis zur Deadline' => '5 Stunden bis zur Deadline')
 * @param {boolean} showTitle - optional: showTitle: true if you like to show a title on hover
 * @param {string} locale - optional: locale: string for the locale (de or en)
 *
 * @example TimeStamp date={new Date()} prefix='Mitglied seit' postfix='bis zur Deadline' showTitle={true} locale='de-ch' />
 */

export const TimeStamp: FC<TTimeStamp> = ({ date: inputDate, prefix, postfix, showTitle = true, locale = 'de' }) => {
	const date = new Date(inputDate);

	const dateTimeAgo = [
		prefix,
		formatDistance(date, new Date(), { addSuffix: !prefix && !postfix, locale: localeMapping[locale] || de }),
		postfix,
	].join(' ');

	const dateTime = format(date, 'dd.MM.yyyy HH:mm');
	const dateTimeISOString = date.toISOString();

	const props = {
		dateTime: dateTimeISOString,
		title: showTitle ? dateTime : undefined,
	};

	return <time {...props}>{dateTimeAgo}</time>;
};
