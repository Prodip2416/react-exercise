import React, { useContext } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const productAll = [
    { name: 'Asus', category: 'laptop' }, { name: 'Dell', category: 'laptop' }, { name: 'HP', category: 'laptop' },
    { name: 'Nikon', category: 'camera' }, { name: 'Sony', category: 'camera' }, { name: 'Canon', category: 'camera' },
    { name: 'Vivo', category: 'phone' }, { name: 'MI', category: 'phone' }, { name: 'IPhone', category: 'phone' }
]

const Category = () => {
    const [category, setCategory] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const selectProduct = productAll.filter(pd=> pd.category === category.toLowerCase() );
        setProducts(selectProduct);
    }, [category])

    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(pd => <CategoryDetail key={pd.name} product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;