import React from 'react';

const Product = (props) => {
    return (
        <div style={{border: '1px solid tomato', margin:'5px',padding: '5px'}}>
            <h1>Name : {props.product.name}</h1>
            <button>add to cart</button>
        </div>
    );
};

export default Product;