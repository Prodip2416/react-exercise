import React, { useState} from 'react';

const Friends = (props) => {
    const familiar = props.familiar;

    let greeting ='';
    if(familiar){
        greeting = <p>Welcome to my friend.</p>
    }else{
        greeting = <p>Who the hell are you?</p>
    }

    let food = familiar ? <p>I will buy food for you.</p> : <p>Lets eat, his his whose whose :)</p>

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Greeting</h1>
                {
                    greeting
                }
            </div>
            <div>
                <h1>Food</h1>
                {
                    food
                }
            </div>
            <div>
                <h1>Connection</h1>
                {
                    familiar && <p>Let's join my facebook.</p>
                }
            </div>
        </div>
    );
};

export default Friends;