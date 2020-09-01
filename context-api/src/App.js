import React, { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('Laptop');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <h1>Count : {category}</h1>
      <Header />
      <Home />
      <Shipment />
    </CategoryContext.Provider>
  );
}

export default App;
