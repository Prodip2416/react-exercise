import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import logo from '../../images/giphy.gif';


const Review = (props) => {
    const [cart, setCart] = useState([]);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const getSavedItem = getDatabaseCart();
        const productKeys = Object.keys(getSavedItem);

        const totalProduct = productKeys.map(key => {
            const product = fakeData.find(item => item.key === key);
            product.quantity = getSavedItem[key];
            return product;
        })
        setCart(totalProduct);
    }, [])

    const removeProductHandle = (productKey) => {
        const remainingProduct = cart.filter(item => item.key !== productKey);
        setCart(remainingProduct);
        removeFromDatabaseCart(productKey);
    }

    let status;
    const placeOrderHandle = () => {
        setCart([]);
        processOrder();
        setShowLogo(true);
    }
    if (showLogo) {
        status =<div style={{textAlign: 'center' }}>
            <img src={logo} alt="" style={{ height: '400px' }} />
        </div>;
    }

    return (
        <div className="shop-container">
            <div className="product">
                {
                    cart.map(item => <ReviewDetail key={item.key + Math.random()} product={item} removeProductHandle={removeProductHandle} />)
                }
                {
                    status
                }
            </div>
            <div className="cart">
                <h1>This is review Cart</h1>
                <Cart key={cart.key + Math.random()} cart={cart}>
                    <button className="cart-btn" onClick={() => placeOrderHandle()}> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;