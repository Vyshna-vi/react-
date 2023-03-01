import React from 'react'
import ViewUserBtn from './viewuserbtn'

function UserCard(props) {
  return (
    <div className='card'>
      <p>{props.user.username}</p>
      <p>{props.user.userid}</p>
      <ViewUserBtn />
    </div>
  )
}

export default UserCard