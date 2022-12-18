/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '/src/components/Atoms/Icon/Icon';

export const TimeStamp = (props) => {
	return (
		<span className="flex flex-end justify-center mx-2 place-items-center text-gray-400 gap-xs">
			<Icon name="time" size="S" />
			<time className="px-0 align-baseline text-sm">{props.time}</time>
		</span>
	);
};

TimeStamp.propTypes = {
	time: PropTypes.time,
};
