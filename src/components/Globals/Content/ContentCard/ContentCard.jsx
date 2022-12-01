import React from 'react';
import PropTypes from 'prop-types';
// import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import "./ContentCard.css"


export const ContentCard = (props) => {
  console.log('contentCard props',props)
  return (
    <article className='root'>
      <div>
        <h1>{props.text}</h1>
          <span>
            <span>Username</span>
            <span>Timestamp</span>
          </span>
          <p>Text... .lots of text. lots of text. lots of text.</p>
          <figure>
            <span>here is the image</span>
          </figure>
      </div>
    </article>
    )
}

ContentCard.PropTypes = {
  text: PropTypes.string
}


export default ContentCard