import React from 'react'

function Form(props){
    return (
    <form className="user-form">
        <label htmlFor='title'>Title:<input id='title' type='text' /></label>
        
        <label htmlFor='email'>Email:<input id='email' type='email' /></label>
        
        <label htmlFor='role'>Role:<select id='role'>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>Designer</option>
            <option>Coffee Slave</option>
            <option>Code Monkey</option>

        </select></label>
        
    </form>
    )
}

export default Form;