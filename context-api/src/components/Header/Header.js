import React from 'react';

const Header = (props) => {
   const {count, setCount} = props;
    return (
        <div>
            <h1>This is Header : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;