import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

function App() {

  const provider = new firebase.auth.GoogleAuthProvider();

  return (
    <div>
      <button>Sign In</button>
    </div>
  );
}

export default App;
