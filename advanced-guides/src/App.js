import React, { useState } from 'react';
import './App.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

function App() {
  const [favtIconColor, setFavtIconColor] = useState('');
  return (
    <div>
      <h1>Hello , React -------------> <FavoriteIcon onClick={() => setFavtIconColor(favtIconColor ? '' : 'secondary')} color={favtIconColor} /> </h1>
    </div>
  );
} 

export default App;
