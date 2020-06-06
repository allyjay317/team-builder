import React, { useState } from 'react'

function Form(props){
    const [user, setUser] = useState({title: "", email: "", role: "Code Monkey"})

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    return (
    <div className='form'>
        <h1>Add User</h1>
        <form className="user-form">
            <div className='field'>
                <label htmlFor='title'>
                    Title:
                </label>
                <input id='title' type='text' value={user.title} name='title' onChange={handleChange}/>
            
            </div>
            <div className='field'>
                <label htmlFor='email'>
                    Email:
                </label>
                <input id='email' type='email' value={user.email} name='email' onChange={handleChange}/>
            </div>
            <div className='field'>
                <label htmlFor='role'>
                    Role:
                </label>
                <select id='role' value={user.role} name='role' onChange={handleChange}>
                    <option>Backend Engineer</option>
                    <option>Frontend Engineer</option>
                    <option>Designer</option>
                    <option>Coffee Slave</option>
                    <option>Code Monkey</option>

                </select>
            
            </div>
            <div className='field'>
            <input type='submit' value='Add' />
            </div>
        </form>
    </div>
    )
}

export default Form;