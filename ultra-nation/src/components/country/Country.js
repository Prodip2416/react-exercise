import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, population, flag, region } = props.country;
    const handleAddCountry = props.handleAddCountry;

    const flagStyle = {
        height: '50px'
    }
    const countryStyle = {
        border: '2px solid cyan',
        margin: '5px',
        padding: '5px'
    }

    return (
        <div style={countryStyle}>
            <h2> {name} </h2>
            <img style={flagStyle} src={flag} alt="" />
            <h3>Population : {population}</h3>
            <p>Region : {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            <Link to={"/detail/" + name}>
                <button>Click To View Detail</button>
            </Link>
            <Link to={"/detail/" + name}>
                <p>Click Here To View Details </p>
            </Link>


        </div>
    );
};

export default Country;