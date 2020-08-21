import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok/>
      <Nayok/>
      <Nayok/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Nayok(){
  const nayokStyle = {
    border:'2px solid purple'
  }
  return (
    <div style={nayokStyle}>
       <h1>Ami khal Nayok</h1>
       <p>I have dove 100 movies.</p>
     </div>
  )
}

export default App;
