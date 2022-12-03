import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import "./UserName.css"

const UserName = (props, icon) => {

  console.log('username props', props)
  return(
    <span className='root'>
      { icon 
        ? <Icon className={`mr-2`} icon={icon} />
        : null
      } 
      <span className='username'>{props.username}</span>
    </span>
  )
}

UserName.PropTypes = {
  username: PropTypes.string,
  icon: 'mumble',
}

export default UserName