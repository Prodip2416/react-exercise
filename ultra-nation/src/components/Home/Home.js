import React, { useState, useEffect } from 'react';
import Country from '../country/Country';
import Cart from '../cart/Cart';

function Home() {
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
        <div>
            <h2>Country Loaded: {countries.length}</h2>
            <h3>Country Added : {cart.length}</h3>
            <Cart country={cart} />
            <ul>
                {
                    countries.map(country => <Country key={country.alpha3Code} country={country}
                        handleAddCountry={handleAddCountry} />)
                }
            </ul>
        </div>
    );
}

export default Home;
