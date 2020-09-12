import React, { useReducer, useRef } from 'react';
import { initialState, patientReducer } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);

        dispatch({
            type: 'ADD_PATIENT',
            id: Math.random(),
            name: nameRef.current.value
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
            </form>
            {
                state.patients.map((pd) => <li key={pd.id} onClick={() => dispatch({
                    type: 'REMOVE_PATIENT',
                    id: pd.id
                })}>{pd.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;