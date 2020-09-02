import React from 'react';

const ConditionalRendering = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return (
        <div>
            <h1> The user is {isLoggedIn ? 'currently' : 'not'} logged in.</h1>
        </div>
    );
};

export default ConditionalRendering;