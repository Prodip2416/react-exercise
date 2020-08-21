import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      <Person name="Sakib" hobby="Bolling" />
      <Person name="Mushi" hobby="Wicket-kipping" />
      <Person name="Tamim" hobby="Bating" />
    </div>
  );
}

function Person(props) {
  const myStyle = {
    color: 'black',
    border: '2px solid cyan',
    margin: '5px'
  }
  console.log(props);
  return (
    <div style={myStyle}>
      <h3>Name : {props.name}</h3>
      <h4>Hobby : {props.hobby}</h4>
    </div>
  )
}

export default App;
