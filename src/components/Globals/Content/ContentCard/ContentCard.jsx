import React from 'react';
import PropTypes from 'prop-types';
// import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import "./ContentCard.css"
import UserName from '../../../Atoms/UserName/UserName';
import TimeStamp  from '../../../Atoms/TimeStamp/TimeStamp'

export const ContentCard = (props) => {
  const cardStyle = [
  "flex flex-start justify-center items-start bg-white py-8 px-12 rounded-full "
  ]

  return (
    <article className={['root', ...cardStyle].join(' ')}>
      <div>
        <h1 className='title'>{props.text}</h1>
          <span className='metainfo'>
          <UserName username={'Display Name'} />
          <TimeStamp time={'13:32'} />
          </span>
        <div>
          <p className='message'>Paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>  
          <figure className='image' >
            <span>here is the image component</span>
          </figure>
        <div className='socialInteraction'>
          <span>Comment-icon</span> |
          <span>Like-icon</span> |
          <span>CopyLink-icon</span>
        </div>
      </div>
    </article>
    )
}

ContentCard.PropTypes = {
  text: PropTypes.string
}


export default ContentCard