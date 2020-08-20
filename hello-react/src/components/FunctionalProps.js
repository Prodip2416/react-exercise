import React from 'react';

const FunctionalProps = (props) => {
    return (
        <div>
            <h1 className="dummyClass">Hello, {props.name}</h1>
            {props.children}
        </div>
       
    )
}

export default FunctionalProps;