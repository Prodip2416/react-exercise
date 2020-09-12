import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount';
import PatientManagement from './components/PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
     <ReducerCount/>
     <PatientManagement/>
    </div>
  );
}

export default App;
