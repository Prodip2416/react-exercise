import React, { useState } from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({ isSignIn: false, name: '', email: '', image: '' });
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const { displayName, email, photoURL } = result.user;
        const signInUser = { isSignIn: true, name: displayName, email: email, image: photoURL };
        setUser(signInUser);
      })
      .catch(error => {
        console.log(error);
        console.log(error.message);
      })
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res=>{
      const signOutUser = { isSignIn: false, name: '', email: '', image: '' };
      setUser(signOutUser);
      console.log('Successfully Sign Out');
    })
    .catch(error =>{
      console.log(error);
      console.log(error.message);
    })
  }

  return (
    <div className="App-header">
      {
        user.isSignIn ? <button onClick={handleSignOut} >Sign Out</button> : <button onClick={handleSignIn} >Sign In</button>
      }

      {
        user.isSignIn && <div>
          <h1>Welcome, Mr. {user.name}</h1>
          <p>Your Email : {user.email}</p>
          <img src={user.image} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
