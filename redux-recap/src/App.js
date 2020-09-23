import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Cart/>
      <Shop/>
    </div>
  );
}

export default App;
