import React from 'react';

const FunctionEventHandler = () => {
    const clickHandler = () =>{
        console.log('Clicked - from a function');
    }
    return (
        <div>
            <button onClick={clickHandler}>Function - Click me</button>
        </div>
    );
};

export default FunctionEventHandler;