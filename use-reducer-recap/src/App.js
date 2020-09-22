import React from 'react';
import './App.css';
import PatientManagement from './components/ReducerCount/PatientManagement/PatientManagement';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
     <ReducerCount/>
     <PatientManagement/>
    </div>
  );
}

export default App;
