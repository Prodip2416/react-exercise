import React, { useState, useEffect } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Total Friends : {friends.length}</h1>
            {
                friends.map(item => <Friends friend={item} />)
            }
        </div>
    );
};

export default Home;