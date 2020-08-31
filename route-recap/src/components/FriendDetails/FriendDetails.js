import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h1>This is friends details components with id : {id}</h1>
            <h3>Name : {friend.name}</h3>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetails;