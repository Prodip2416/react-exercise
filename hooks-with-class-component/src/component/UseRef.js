import React, { useRef } from 'react';

const UseRef = () => {
    const userNameRef = useRef(null);

    const handleChange = () => {
        // userNameRef.current.focus();
        console.log(userNameRef.current.value)
    }
    return (
        <div>
            <input ref={userNameRef} type="text"></input>
            <button onClick={handleChange}>Get Value</button>
        </div>
    );
};

export default UseRef;