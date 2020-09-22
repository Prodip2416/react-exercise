import React, { useReducer, useRef } from 'react';
import { initialPatient, patientReducer } from './PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, initialPatient);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            id: state.patients.length + 1,
            name: nameRef.current.value
        });
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
            </form>
            {
                state.patients.map(item => <li key={item.id} onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: item.id })}>
                    {item.name}
                </li>)
            }
        </div>
    );
};

export default PatientManagement;