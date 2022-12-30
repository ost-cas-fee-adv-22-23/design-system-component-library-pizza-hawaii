import React, { FC } from 'react';
import moment from 'moment';

import { IconLink } from '../IconLink/IconLink';

type BaseProps = {
	time: string;
	prefix?: string;
	postfix?: string;
	icon?: string;
};

export const TimeStamp: FC<BaseProps> = ({ time, prefix, postfix, icon = 'time' }) => {
	const dateTimeAgo = [
		prefix,
		moment(new Date(time))
			.locale('de-ch')
			.fromNow(!!prefix || !!postfix),
		postfix,
	].join(' ');
	const dateTime = moment(new Date(time)).locale('de').format('LLLL');

	return (
		<IconLink as="span" icon={icon} color="slate" size="S">
			<time dateTime={time} title={dateTime}>
				{dateTimeAgo}
			</time>
		</IconLink>
	);
};
