import React from 'react';
import User from './User'

function UserList(props){

    return (
        <div className="user-list">
            {props.users.map(user =>{
                return <User data={user} />
            })}
        </div>
    )
}

export default UserList