import React from 'react';
import './App.css';
import JSX from './components/JSX/JSX';
import RenderElement from './components/RenderElement/RenderElement';
import Component from './components/Component/Component';

function App() {
  return (
    <div>
      <Component name="Bob"/>
      <Component name="Todd"/>
      <Component name="John"/>
    </div>
  );
}

export default App;
