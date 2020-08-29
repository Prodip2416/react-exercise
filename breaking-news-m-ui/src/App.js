import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import News from './components/News/News';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <News/>
    </div>
  );
}

export default App;
