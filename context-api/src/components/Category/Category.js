import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    return (
        <div>
            <h2>This is Category</h2>
            <CategoryDetail count={props.count}/>
        </div>
    );
};

export default Category;