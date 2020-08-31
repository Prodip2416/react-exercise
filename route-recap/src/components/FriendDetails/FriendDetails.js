import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>This is friends details components with id : {id}</h1>
        </div>
    );
};

export default FriendDetails;