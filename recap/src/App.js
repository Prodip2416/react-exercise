import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Jashim','Bappa Raz'];
  return (
    <div className="App">
      <Nayok name ={names[0]} movie="80"/>
      <Nayok name={names[1]} movie="40"/>
      <Nayok name="Deepjol"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle = {
    border:'2px solid purple'
  }
  return (
    <div style={nayokStyle}>
       <h1>Ami Nayok {props.name}</h1>
  <p>I have dove {props.movie || 0} movies.</p>
     </div>
  )
}

export default App;
