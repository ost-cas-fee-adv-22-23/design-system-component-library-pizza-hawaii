import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { IconLink } from '../IconLink/IconLink';

type BaseProps = {
	time: string;
};

export const TimeStamp: FC<BaseProps> = ({ time }) => {
	let localTime = time;
	let displayTime = time;

	const isToday = (d): boolean => {
		const today = new Date();
		return (
			d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate()
		);
	};
	try {
		localTime = new Date(time).toLocaleString();
		displayTime = isToday(new Date(time)) ? new Date(time).toLocaleTimeString() : new Date(time).toLocaleDateString();
	} catch (error) {
		console.log(error);
	}
	return (
		<IconLink as="span" icon="time" color="slate" size="S">
			<time dateTime={time} title={localTime}>
				{displayTime}
			</time>
		</IconLink>
	);
};

TimeStamp.propTypes = {
	time: PropTypes.string.isRequired,
};
