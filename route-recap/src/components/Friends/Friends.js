import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const { name, email, id } = props.friend;

    const friendStyle = {
        border: '1px solid cyan',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h3>Name : {name}</h3>
            <h5>Email : {email}</h5>
            <p> <Link to={`/friend/${id}`}>Click here to know details</Link> </p>
        </div>
    );
};

export default Friends;