import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index.js';
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const totalShowingItem = fakeData.slice(0, 10);
    const [itemCollection, setitemCollection] = useState(totalShowingItem);
    const [cartItem, setCartItem] = useState([]);

    const handleCart = (product) => {
       // console.log('cart', props);
        const totalCartItem = [...cartItem, product];
        //console.log('cart', totalCartItem);
        setCartItem(totalCartItem);
    }

    return (
        <div className="shop-container">
            <div className="item-container">
                {
                    itemCollection.map(item => <Product key={item.key} item={item} handleCart={handleCart} />)
                }
            </div>
            <div>
                <Cart cart={cartItem} />
            </div>
        </div>
    );
};

export default Shop;