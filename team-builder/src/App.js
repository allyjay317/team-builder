import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
