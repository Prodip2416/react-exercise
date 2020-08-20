import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
// import FunctionalComponents from './components/FunctionalComponents';
// import {FunctionalComponents} from './components/FunctionalComponents';
// import ClassComponents from './components/ClassComponents';
// import JSX from './components/JSX';
import FunctionalProps from './components/FunctionalProps';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <FunctionalComponents/>
      <ClassComponents/>
      <JSX/> */}
      <FunctionalProps name="Piter">
        <p>This a Piter Paragraph.</p>
      </FunctionalProps>
      <FunctionalProps name="Tom"/>
      <FunctionalProps name="Marry"/>
    </div>
  );
}

export default App;
