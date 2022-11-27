import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css'

/**
 * User Icon with image from loged in user
 */
export const UserProfile = (imgPath) => {
  console.log('hey there!')

  const style = [
    "rounded-lg",
    "self-center"
  ]

  return (
    <div className={[ ...style]}>
      <h3>user profile</h3>
      <img className='profileImage' src={imgPath} alt='userimage' />
    </div>
  )
}

UserProfile.PropTypes = {
  /**
   * image path string
   */
  imgPath: PropTypes.string
}

UserProfile.defaultProps = {
  imgPath: '../../../assets/img/testimages/testuser.png'
}