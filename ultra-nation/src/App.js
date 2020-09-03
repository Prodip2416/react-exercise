import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail/Detail';

function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path="/"> 
          <Home/>
        </Route>

        <Route path="/home"> 
          <Home/>
        </Route>

        <Route path="/detail/:name"> 
          <Detail/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
