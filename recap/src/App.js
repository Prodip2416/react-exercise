import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Jashim', 'Bappa Raz'];
  return (
    <div className="App">
      <Movie />
      <Nayok name={names[0]} movie="80" />
      <Nayok name={names[1]} movie="40" />
      <Nayok name="Deepjol" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Movie() {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Total Movie : {count}</h3>
      <button onClick={clickHandle}>Add Movie</button>
      <MovieWatch count={count} />
      <MovieWatch count={count + 5} />
      <MovieWatch count={count + 10} />
    </div>
  )
}
function MovieWatch(props) {
  return (
    <div>
      <p>I have watch {props.count} movies</p>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '5px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <p>I have dove {props.movie || 0} movies.</p>
    </div>
  )
}

export default App;
