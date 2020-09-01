import React from 'react';
import { useState } from 'react';

const Header = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>This is Header : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;