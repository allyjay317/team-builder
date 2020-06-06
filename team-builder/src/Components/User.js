import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function User({ data }){
    const [edit, setEdit] = useState(false);
    
    
    function clickCard(event){
        setEdit(!edit);
    }

    function EditButton(props){
        const history = useHistory();
        function clickEdit(event){
            event.stopPropagation();
            history.push(`/edit/${data.id}`);
            setEdit(!edit);
        }
    
        if(props.shown){
            return <button onClick={clickEdit}>Edit</button>
        }
        return <></>
    }

    return (
        <div className="user-card" onClick={clickCard}>
            <h1>{data.title}</h1>
            <h3>-- {data.role} --</h3>
            <p>{data.email}</p>
            <EditButton shown={edit}/>
        </div>
    )
}



export default User;