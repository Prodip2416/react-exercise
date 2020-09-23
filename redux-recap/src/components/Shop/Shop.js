import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        { id: 1, name: 'Lenovo Laptop' },
        { id: 2, name: 'Asus Laptop' },
        { id: 3, name: 'Dell Laptop' },
        { id: 4, name: 'HP Laptop' },
        { id: 5, name: 'Apple Laptop' },
    ]
    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Shop;