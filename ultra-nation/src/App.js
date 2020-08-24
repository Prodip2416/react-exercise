import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/country/Country';

function App() {
  const [countries, setCountries] = useState([]);

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
    console.log('Country added - ', country);
  }

  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
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
