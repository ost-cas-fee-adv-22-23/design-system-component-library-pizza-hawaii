import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import './TimeStamp.css'
import { symbolName } from 'typescript';



const TimeStamp = (props) => {

  const styles = ["flex flex-end justify-center mx-3 text-gray-400"]
  return (
    <span className={[root, ...styles].join(' ')}>
      <Icon className={`mr-xs`} name={'time'} size='s' />

      <time className='px-0 align-baseline'>{props.time}</time>
    </span>
  )

  TimeStamp.PropTypes = {
    time: PropTypes.time,

  }
}

export default TimeStamp
