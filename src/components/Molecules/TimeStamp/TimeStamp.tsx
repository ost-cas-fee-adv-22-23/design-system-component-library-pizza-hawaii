import React, { FC } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { IconLink } from '../IconLink/IconLink';

type BaseProps = {
	time: string;
};

export const TimeStamp: FC<BaseProps> = ({ time }) => {
	const dateTimeAgo = moment(new Date(time)).locale('de').fromNow();
	const dateTime = moment(new Date(time)).locale('de').format('LLLL');

	return (
		<IconLink as="span" icon="time" color="slate" size="S">
			<time dateTime={time} title={dateTime}>
				{dateTimeAgo}
			</time>
		</IconLink>
	);
};

TimeStamp.propTypes = {
	time: PropTypes.string.isRequired,
};
