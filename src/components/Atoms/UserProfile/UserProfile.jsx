import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css'
import imageFile from './img/testuser.png'
/**
 * User Icon with image from loged in user
 */
export const UserProfile = () => {

  const baseStyle = [
    "rounded-lg",
    "self-center",
    "p-10"
  ]

  // TODO: two variants of sizes, 
  const sizeStyle = {
    M: ["h-10", "w- 10"],
    L: ["h-40", "w-40"]
  }

  const userImage = {
    src: imageFile,
    userName: 'alt text: TODO: here username'
  }

  return (
    <div className={[ ...baseStyle]}>
      <img className='profileImage' src={userImage.src} alt={userImage.userName}/>
    </div>
  )
}

UserProfile.PropTypes = {
  /**
   * image path string
   */
  src: PropTypes.string,
  userName: PropTypes.string
}

UserProfile.defaultProps = {
  src: imageFile,
  userName: 'alt text: TODO: here username'
}