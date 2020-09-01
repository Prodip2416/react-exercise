import React from 'react';
import Cart from '../Cart/Cart';

const Review = (props) => {
    return (
        <div className="shop-container">
            <div className="product">
                <h1>This is review</h1>
            </div>
            <div className="cart">
                <h1>This is review Cart</h1>
                {/* <Cart/> */}
            </div>
        </div>
    );
};

export default Review;