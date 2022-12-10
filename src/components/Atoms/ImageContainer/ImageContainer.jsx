import React from 'react';
import PropTypes from 'prop-types';
import staticTestImg from './testimage/testimage_01.jpg'

// TODO import hover icon for fullscreen and apply it to hover
// import { Icon } from "/src/components/Atoms/Icon/Icon";


export const ImageContainer = (props) => {
  const containerStyles = ["max-h-56"]

  const imageStyles = ["rounded-lg", "max-h-56"]
  
  const { imgSrc, altText } = props
  console.log('imgage props', props)

  return (
    <div className={[...containerStyles].join(' ')}>
      <div className={["max-h-3"]}>
        <img className={[...imageStyles].join(' ')} src={staticTestImg} alt={props.altText} />
      </div>
    </div>
  )
}


ImageContainer.PropTypes = {
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
}

ImageContainer.defaultProps = {
  imgSrc: staticTestImg,
  altText: 'default alt text'
}

