import React, { useReducer } from 'react';


const initialValue = { value: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <div>
            <h1>Count Value : {state.value}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </div>
    );
};

export default ReducerCount;