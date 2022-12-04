import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "/src/components/Atoms/Icon/Icon";
import "/src/components/Components-base.css";
import "./UserName.css"

const UserName = (props, icon) => {

  return(
    <span className='root'>
      <Icon className={`mr-2`} name='profile' size='s' /> 
      <span className='username'>{props.username}</span>
    </span>
  )
}

UserName.PropTypes = {
  username: PropTypes.string,
  icon: 'mumble',
}

export default UserName