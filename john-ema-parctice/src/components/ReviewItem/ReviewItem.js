import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, seller, price, quantity } = props.product;
    return (
        <div className="item-cart">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div>
                 <h4 className="product-title">{name}</h4>
                <p>By : <small>{seller}</small></p>
                <p>Price : ${price}</p>
                <p>Quantity : {quantity}</p>
                <button>Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;