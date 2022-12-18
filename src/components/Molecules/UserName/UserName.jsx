import React from 'react';
import PropTypes from 'prop-types';
import { IconLink } from '../../Molecules/IconLink/IconLink';

export const UserName = ({ username }) => {
	return <IconLink icon="profile" className="text-violet-600 text-sm" label={username} href={`/${username}`} />;
};

UserName.propTypes = {
	username: PropTypes.string,
};

UserName.defaultProps = {
	username: 'Pinapple Peter',
};
