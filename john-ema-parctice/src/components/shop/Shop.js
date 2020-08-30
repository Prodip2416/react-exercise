import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index.js';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
    const totalShowingItem = fakeData.slice(0, 10);
    const [itemCollection, setitemCollection] = useState(totalShowingItem);
    const [cartItem, setCartItem] = useState([]);

    const handleCart = (product) => {
        const totalCartItem = [...cartItem, product];
        setCartItem(totalCartItem);

        const localStorageProduct = totalCartItem.filter(item => item.key === product.key);
        addToDatabaseCart(product.key, localStorageProduct.length);
    }

    return (
        <div className="product-container">
            <div className="item-container">
                {
                    itemCollection.map(item => <Product key={item.key} item={item} handleCart={handleCart} showAddToCart={true} />)
                }
            </div>
            <div>
                <Cart cart={cartItem} />
            </div>
        </div>
    );
};

export default Shop;