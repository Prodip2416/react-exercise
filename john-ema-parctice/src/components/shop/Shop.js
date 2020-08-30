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
        const addProductKey = product.key;
        const sameProduct = cartItem.find(item => item.key === addProductKey);
        let count = 1;
        let totalCartItem = [];

        if(sameProduct){ // if before add to this cart
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const othersProduct = cartItem.filter(item => item.key !== addProductKey)
            totalCartItem = [...othersProduct, sameProduct];
        }else{ // if before not added to cart
            product.quantity = count;
            totalCartItem = [...cartItem, product];
        }

        setCartItem(totalCartItem); // added to cart
        addToDatabaseCart(product.key, count); // added to localStorage
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