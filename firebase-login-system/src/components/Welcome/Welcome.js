import React from 'react';
import * as firebase from "firebase/app";


const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome to You</h1>
            <button onClick={props.handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Welcome;