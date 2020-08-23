import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.item;
    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-title">{name}</h4>
                <p>By : <small>{seller}</small></p>
                <p>Price : ${price}</p>
                <p>only {stock||0} left in stock - order soon</p>
                <button onClick={() => { props.handleCart(props.item)}}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;