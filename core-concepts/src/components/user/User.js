import React, { useState } from 'react';

const User = (props) => {
    const [phoneNo, setPhoneNo] = useState(['']);

    const { name, email, phone, picture } = props.user;
    const handleAddUser = props.handleAddUser;
    const fullName = `${name.title} ${name.first} ${name.last}`;

    const userStyle = {
        border: '1px solid cyan',
        width: "500px",
        margin: '5px',
        padding: '5px',
        display:'flex'
    }
    const btn = {
        backgroundColor:'green',
        color:'white'
    }

    const showPhoneNo = (no) => {
        setPhoneNo(no);
    }

    return (
        <div style={userStyle}>
            <div>
                <img src={picture.large} alt="" />
            </div>
            <div>
                <h2>Name : {fullName}</h2>
                <h3>Name : {email}</h3>
                <h3>Phone No : {phoneNo}</h3>
                <button onClick={() => handleAddUser(props.user)}> Add Me</button>
                <button style={btn} onClick={() => showPhoneNo(phone)}> Show Phone Number</button>
            </div>
            
        </div>
    );
};

export default User;