export const initialState = {
    patients: []
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const totalPatient = [...state.patients, newPatient];
            return { patients: totalPatient };
        case 'REMOVE_PATIENT':
            const remainingPatient = state.patients.filter(item => item.id !== action.id);
            const totalRemainingPatient = { patients: remainingPatient };
            return totalRemainingPatient;
        default:
            return state;
    }
}