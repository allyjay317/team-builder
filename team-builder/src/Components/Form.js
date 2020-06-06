import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function Form(props){
    const [user, setUser] = useState({title: "", email: "", role: "Code Monkey"})
    const history = useHistory();
    const params = useParams();

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    useEffect(()=>{
        if(props.edit){
            let temp = props.users.filter(u => u.id === Number(params.id));
            setUser({...temp[0]});
        }
    }, [params.id])

    function handleSubmit(event){
        event.preventDefault();
        props.add(user);
        history.push('/');
    }

    return (
    <div className='form'>
        <h1>{props.edit ? "Edit" : "Add"} User</h1>
        <form className="user-form" onSubmit={handleSubmit}>
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
            <input type='submit' value={props.edit ? 'Save' : 'Add'} onSubmit={handleSubmit}/>
            </div>
        </form>
    </div>
    )
}

export default Form;