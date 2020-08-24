import React from 'react';

const Country = (props) => {
    console.log(props.name);
    return (
        <div>
            <h2>This a country : {props.name} </h2>
        </div>
    );
};

export default Country;