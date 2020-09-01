import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
     <Header/>
     <Home/>
     <Shipment/>
    </div>
  );
}

export default App;
