import React from 'react';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';


function App() {

  return (
    <div>
      <ConditionalRendering isLoggedIn={true}/>
    </div>
  );
}

export default App;
