import React from 'react';
import PropTypes from 'prop-types';
import { IconLink } from '../IconLink/IconLink';

export const TimeStamp = (props) => {
	return (
		<IconLink as="span" icon="time" color="slate" size="S">
			<time>{props.time}</time>
		</IconLink>
	);
};

TimeStamp.propTypes = {
	time: PropTypes.time,
};
