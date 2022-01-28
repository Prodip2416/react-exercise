import React from 'react';

const UserInfo = (props) => {
    console.log(props);
    return (
        <div>
            <p>Name: {props.user.name}</p>
            <p>Age: {props.user.age}</p>
        </div>
    );
};

export default UserInfo;