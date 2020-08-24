import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/country/Country';
import Cart from './components/cart/Cart';
import foods from './components/fakeData/foods.js';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        // console.log(data);
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const totalCart = [...cart, country];
    setCart(totalCart);
  }

  return (
    <div className="App">
      <ul>
       {
          foods.map(item =><li>{item.name}</li> ) 
       }
      </ul>
      <h2>Country Loaded: {countries.length}</h2>
      <h3>Country Added : {cart.length}</h3>
      <Cart country={cart}/>
      <ul>
        {
          countries.map(country => <Country key={country.alpha3Code} country={country}
            handleAddCountry={handleAddCountry} />)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
