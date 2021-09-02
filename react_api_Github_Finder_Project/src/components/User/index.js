import React from 'react'
import './style.css'

const User = (props) => {
    const user = props.userItem;
    return (
        <div className="card">
          <img src={user.avatar_url} />
          <p>{user.login}</p>
        </div>
    )
}

export default User;
