import React from 'react';

const Product = (props) => {
    const {id,name} = props.product;
    return (
        <div style={{border:'1px solid tomato', padding:'10px'}}>
            <h3>{name}</h3>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;