/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '/src/components/Atoms/Icon/Icon';
import '/src/components/Components-base.css';

export const TimeStamp = (props) => {
	return (
		<span className="flex flex-end justify-center mx-3 text-gray-400 gap-xs">
			<Icon name="time" size="S" />

			<time className="px-0 align-baseline">{props.time}</time>
		</span>
	);
};

TimeStamp.propTypes = {
	time: PropTypes.time,
};
