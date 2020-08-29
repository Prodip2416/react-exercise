import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TopHeading from './components/TopHeading/TopHeading';

function App() {
  return (
    <div>
      <h2 className="text-warning text-center">Hello, React Bootstrap</h2>
      <Header/>
      <TopHeading/>
    </div>
  );
}

export default App;
