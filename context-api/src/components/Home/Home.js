import React from 'react';
import Category from '../Category/Category';

const Home = (p) => {
    const { count } = p;
    return (
        <div style={{border: '1px solid cyan'}}>
            <h1>This is Home : {count}</h1>
            <Category count={count}/>
        </div>
    );
};

export default Home;