import React from 'react'

function User({ data }){
    return (
        <div className="user-card">
            <h1>{data.title}</h1>
            <h3>-- {data.role} --</h3>
            <p>{data.email}</p>
        </div>
    )
}

export default User;