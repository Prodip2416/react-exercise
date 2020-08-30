import React, { useEffect, useState} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const getSavedItem  = getDatabaseCart();
        const productKeys = Object.keys(getSavedItem);

        const totalProduct = productKeys.map(key =>{
            const product = fakeData.find(item => item.key === key);
            product.quantity = getSavedItem[key];
            return product;
        })
        setCart(totalProduct);

    }, [])

    return (
        <div>
            {
                cart.map(item=> <ReviewItem key={item.key+Math.random()} product={item}/> )
            }
        </div>
    );
};

export default Review;