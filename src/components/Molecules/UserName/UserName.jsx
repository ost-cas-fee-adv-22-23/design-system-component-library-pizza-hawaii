import React from 'react';
import PropTypes from 'prop-types';
import { IconLink } from "../../Molecules/IconLink/IconLink";



export const UserName = ({ username, ...props }) => {
	return <IconLink icon="profile" color="violet" label={username} href={`/${username}`} />;
};

UserName.propTypes = {
	username: PropTypes.string,
};

UserName.defaultProps = {
	username: "Pinapple Peter",
};
