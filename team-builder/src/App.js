import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import UserList from './Components/UserList'

function App() {
  const [users, setUsers] = useState([{"title": "Allison", "email": "ajaneusher@gmail.com", "role": "Code Monkey"}]);

  function addUser(user){
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <Form add={addUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
