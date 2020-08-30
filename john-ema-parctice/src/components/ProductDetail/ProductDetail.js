import React from 'react';
import { useParams } from "react-router-dom";
import fakeData from '../../fakeData';
import Product from '../product/Product';

const ProductDetail = () => {
    
    const {productKey} = useParams();
    const product = fakeData.find(item => item.key === productKey);

    return (
        <div>
            <h1 className="">Product Detail :</h1>
            <Product item={product} showAddToCart={false}/>
        </div>
    );
};

export default ProductDetail;