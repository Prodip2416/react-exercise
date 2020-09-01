import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Header : {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
            <button onClick={() => setCategory('Phone')}>Phone</button>
        </div>
    );
};

export default Header;