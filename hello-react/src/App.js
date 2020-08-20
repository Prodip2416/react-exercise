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
// import FunctionalProps from './components/FunctionalProps';
// import ClassProps from './components/ClassProps';
// import State from './components/State';
// import SetState from './components/SetState';
import Destructuring from './components/Destructuring';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <FunctionalComponents/>
      <ClassComponents/>
      <JSX/> */}
      {/* <FunctionalProps name="Piter">
        <p>This a Piter Paragraph.</p>
      </FunctionalProps>
      <FunctionalProps name="Tom"/>
      <FunctionalProps name="Marry"/> */}
      {/* <ClassProps name="Piter"/>
      <ClassProps name="Tom"/>
      <ClassProps name="Marry">
        <p>This a Marry Paragraph</p>
      </ClassProps> */}

      {/* <State/> */}
      {/* <SetState/> */}
      <Destructuring name="Harry" country="USA"/>
      <Destructuring name="Piter" country="UK"/>
    </div>
  );
}

export default App;
