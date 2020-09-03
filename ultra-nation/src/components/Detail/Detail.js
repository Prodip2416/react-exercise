import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);  
    const { alpha3Code, region, subregion, flag} = country;

    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    console.log(country);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]);
              //  console.log(data);
            })
            .catch(error => console.log(error))
    }, [])
   
    return (
        <div>
             <h1>Country Name : {name}</h1>   
            <p>alpha3Code : {alpha3Code}</p>
            <p>region : {region}</p>
            <img src={flag} style={{height:'200px'}} alt=""/>
             <Link to="/home">
                <button>Back to Home Page</button>
             </Link>
             
        </div>
    );
};

export default Detail;