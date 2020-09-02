import React, { useState } from 'react';
import { useEffect } from 'react';

const State = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <div>
            <h1>It is {time}</h1>
        </div>
    );
};

export default State;

// React Only Updates What’s Necessary