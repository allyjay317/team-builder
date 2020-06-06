import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import UserList from './Components/UserList'
import { Route, useHistory } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([{"title": "Allison", "email": "ajaneusher@gmail.com", "role": "Code Monkey", id:Date.now()}]);

  function addUser(user){
    let search = users.filter(u => u.id !== user.id);
    if(search.length === users.length){
      setUsers([...users, {...user, id:Date.now()}]);
    }
    else{
      setUsers([...search, user]);
    }
  }

  const history = useHistory();

  return (
    <div className="App">
      <UserList users={users}/>
      <Route exact path='/' render={() => <button onClick={()=> history.push('/add')} >Add New User</button>} />
      <Route path='/add'
        render={()=> <Form add={addUser}/>}
      />
      <Route path='/edit/:id'
        render={()=> <Form edit users={users} add={addUser}/>}
      />
    </div>
  );
}

export default App;
