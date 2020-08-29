import React, { useState, useEffect } from 'react';
import './App.css';
import ShowNews from './components/ShowNews/ShowNews';
import Header from './components/Header/Header.js';

function App() {

  return (
    <div>
      <Header />
      <ShowNews />
    </div>
  );
}

export default App;
