import React, { useState, useEffect } from 'react';
import './App.css';
import Friends from './components/Friends/Friends';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[friends, setFriends] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setFriends(data))
  },[])

  return (
    <div>
        <h1>Total Friends : {friends.length}</h1>
        {
          friends.map(item=> <Friends friend={item}/> )
        }
    </div>
  );
}

export default App;
