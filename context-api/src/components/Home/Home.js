import React from 'react';

const Home = (p) => {
    const { count } = p;
    return (
        <div>
            <h1>This is Home : {count}</h1>
        </div>
    );
};

export default Home;