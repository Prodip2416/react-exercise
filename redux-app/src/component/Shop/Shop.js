import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        { id: 1, name: 'Lenovo' },
        { id: 1, name: 'Asus' },
        { id: 1, name: 'Dell' },
        { id: 1, name: 'HP' },
        { id: 1, name: 'Apple' },
    ]
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd=> <Product key={pd.id} product={pd} />)
            }
        </div>
    );
};

export default Shop;