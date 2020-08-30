import React, { useEffect, useState} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getSavedItem  = getDatabaseCart(); // get from database/ LocalStorage
        const productKeys = Object.keys(getSavedItem); // get the all key

        const totalProduct = productKeys.map(key =>{ // map all the key
            const product = fakeData.find(item => item.key === key); // get the product from key 
            product.quantity = getSavedItem[key];
            return product;
        })

        setCart(totalProduct); // set to cart

    }, [])

    const removeProduct = (productKey) =>{
        const remainingProduct = cart.filter(item=> item.key !== productKey);
        setCart(remainingProduct);
        removeFromDatabaseCart(productKey); // Remove from database / localStorage
    }

    return (
        <div>
            <div className="product-container">
                <div className="item-container">
                    <h1>Total Cart Item : {cart.length}</h1>
                    {
                        cart.map(item => <ReviewItem key={item.key + Math.random()} product={item} removeProduct={removeProduct} />)
                    }
                </div>
                <div>
                    <Cart cart={cart} />
                </div>
            </div>
            
        </div>
    );
};

export default Review;