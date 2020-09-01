import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const count = useContext(CategoryContext);
    console.log(count)
    return (
        <div>
            <h4>This is Category Detail : {count}</h4>
        </div>
    );
};

export default CategoryDetail;