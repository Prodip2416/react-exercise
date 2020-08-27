import React, { useState, useEffect } from 'react';
import User from './User';

const RandomUser = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
            .then(res => res.json())
            .then(data => {
                setUsers(data.results);
                // console.log(data.results);
            })
    }, [])
    const handleAddUser = (person) => {
        const newUser = [...user, person];
        setUser(newUser);
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Total User : {users.length}</h2>
            <h3 style={{ textAlign: 'center' }}>Total Added users : {user.length}</h3>
            <ul>
                {
                    users.map(user => <User key={user.name.last} user={user} handleAddUser={handleAddUser} />)
                }
            </ul>

        </div>
    );
};

export default RandomUser;