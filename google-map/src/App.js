import React, { useState } from 'react';
import Direction from './components/Map/Direction';
import Map from './components/Map/Map';

function App() {
  const [origin, setOrigin] = useState('');
  const [direction, setDirection] = useState('');

  return (
    <div className="App">
      {/* <Map/> */}
      <input type="text" onBlur={(e)=> setOrigin(e.target.value)}/>
      <input type="text" onBlur={(e) => setDirection(e.target.value)}/>
      <Direction origin={origin} direction={direction} />
    </div>
  );
}

export default App;
