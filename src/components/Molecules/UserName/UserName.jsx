import React from 'react';
import PropTypes from 'prop-types';
import { IconLink } from '../IconLink/IconLink';

export const UserName = ({ username }) => {
	return (
		<IconLink href={`/${username}`} icon="profile" color="violet" size="S">
			{username}
		</IconLink>
	);
};

UserName.propTypes = {
	username: PropTypes.string,
};

UserName.defaultProps = {
	username: 'Pinapple Peter',
};
