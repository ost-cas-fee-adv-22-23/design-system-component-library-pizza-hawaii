import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import './TimeStamp.css'



const TimeStamp = (props) => {

  console.log('timestamp props', props)
  return (
    <span className='root'>
      <Icon className={`mr-2`} name={'time'} size='s' />

      <time className='px-1'>{props.time}</time>
    </span>
  )

  TimeStamp.PropTypes = {
    time: PropTypes.time,

  }
}

export default TimeStamp