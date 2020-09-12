import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props;
    return (
        <div style={{ border: '1px solid tomato', padding: "5px", margin: '5px' }}>
            <h3>Name : {product.name}</h3>
            <button onClick={() => addToCart(product.id, product.name)}>add to cart</button>
        </div>
    );
};

export default Product;