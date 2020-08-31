import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
 
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/friend/:id">
          <FriendDetails/>
        </Route>

        <Route path="*">
          <NotMatch/>
        </Route>

      </Switch>
     
    </Router>
  );
}

export default App;
