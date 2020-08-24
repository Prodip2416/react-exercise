import React from 'react';

const Country = (props) => {
    const { name, population, flag, region } = props.country;
    const flagStyle = {
        height: '50px'
    }
    return (
        <div>
            <h2> {name} </h2>
            <img style={flagStyle} src={flag} alt="" />
            <h3>Population : {population}</h3>
            <p>Region : {region}</p>
        </div>
    );
};

export default Country;