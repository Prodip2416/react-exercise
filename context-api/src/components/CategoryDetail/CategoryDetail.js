import React from 'react';

const CategoryDetail = (props) => {
    const { name, category} = props.product;
    return (
        <div>
            <h3>This is your Category Details:</h3>
            <h4>Selected Category: {name}, {category}</h4>
        </div>
    );
};

export default CategoryDetail;