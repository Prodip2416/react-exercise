import React from 'react';

const Product = (props) => {
    // console.log(props)
    const { product, addToCart } = props;
    return (
        <div style={{ border: '1px solid tomato', padding: '10px' }}>
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product.id, product.name)}>Add To Cart</button>
        </div>
    );
};

export default Product;

