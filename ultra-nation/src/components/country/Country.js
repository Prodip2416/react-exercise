import React from 'react';

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
        </div>
    );
};

export default Country;