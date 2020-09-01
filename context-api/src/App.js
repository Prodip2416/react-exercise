import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <Header count={count} setCount={setCount} />
      <Home count={count} />
      <Shipment />
    </div>
  );
}

export default App;
