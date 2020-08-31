import React from 'react';

const Friends = (props) => {
    const { name, email } = props.friend;

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
        </div>
    );
};

export default Friends;