import React from 'react';

const Cart = (props) => {
    const totalItem = props.country;
    const totalPopulation = totalItem.reduce((sum, item) => sum + item.population, 0);
    return (
        <div>
            <h3>Population : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;