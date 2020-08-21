import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>React Components</h1>
        <Person/>
        <Person/>
        <Person/>
    </div>
  );
}

function Person() {
  const myStyle = {
    color:'black',
    border: '2px solid cyan',
    margin: '5px'
  }
  return (
    <div style={myStyle}>
      <h3>Name : Sakib Al Hasan</h3>
      <h4>Cricketer</h4>
    </div>
  )
}

export default App;
