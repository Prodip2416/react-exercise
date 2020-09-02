import React from 'react';

const JSX = () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    }
    function formate(user) {
        return user.firstName + ' ' + user.lastName;
    }
    return (
        <div>
            <h1>Hello, JSX!</h1>
            <h3>Hello, {formate(user)}</h3>
        </div>
    );
};

export default JSX;