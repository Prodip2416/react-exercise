import React, { useState} from 'react';
import './App.css';
import RandomUser from './components/user/RandomUser';
import Friends from './components/Rendering/Friends';

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div style={{ textAlign: 'center' }}>
      {/* <RandomUser /> */}
      <h2>Is Familiar : {familiar.toString()}</h2>
      <button onClick={() =>setFamiliar(!familiar)}>Toggle Friend</button>
      {/* <Friends familiar={familiar}/> */}
      <Friends familiar={familiar}/>
    </div>
  );
}

export default App;
