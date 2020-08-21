import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: "Piter",
    hobby: "Programming"
  }
  const myStyle = {
    color:"red",
    backgroundColor:"cyan"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          My First Paragraph on React
        </p>
        <p style={myStyle} style={{color:"black"}}>Name : {person.name} Hobby {person.hobby}</p>
        {2010 + 10}
      </header>
    </div>
  );
}

export default App;
