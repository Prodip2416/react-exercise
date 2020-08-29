import React from 'react';
import './App.css';
import LineChartExapmle from './components/LineChart/LineChartExapmle';
import ScatterChartExample from './components/ScatterChart/ScatterChartExample';
import PieChartExample from './components/PieChart/PieChartExample';

function App() {

  return (
    <div>
      <LineChartExapmle/>
      <ScatterChartExample/>
      <PieChartExample/>
    </div>
  );
}

export default App;
