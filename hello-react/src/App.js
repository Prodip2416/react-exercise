import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
// import FunctionalComponents from './components/FunctionalComponents';
import {FunctionalComponents} from './components/FunctionalComponents';
import ClassComponents from './components/ClassComponents';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      <FunctionalComponents/>
      <ClassComponents/>
    </div>
  );
}

export default App;
