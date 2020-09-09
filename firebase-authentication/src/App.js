import React, { useState } from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({ isSignIn: false, name: '', email: '', image: '', success: false, error: '' });
  const [newUser, setNewUser] = useState(false);

  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

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
      .then(res => {
        const signOutUser = { isSignIn: false, name: '', email: '', image: '' };
        setUser(signOutUser);
        console.log('Successfully Sign Out');
      })
      .catch(error => {
        console.log(error);
        console.log(error.message);
      })
  }

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUser = { ...user };
          newUser.success = true;
          newUser.error = '';
          setUser(newUser);
          userInfoUpdate(user.name);
         
        })
        .catch(error => {
          const newUser = { ...user };
          newUser.success = false;
          newUser.error = error.message;
          setUser(newUser);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res);
          const newUser = { ...user };
          newUser.success = true;
          newUser.error = '';
          setUser(newUser);
        })
        .catch(error => {
          const newUser = { ...user };
          newUser.success = false;
          newUser.error = error.message;
          setUser(newUser);
        });
    }
    e.preventDefault();
  }

  const handleBlur = (e) => {
    let isValidForm = true;
    if (e.target.name === 'email') {
      isValidForm = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isGreaterThanFive = e.target.value.length > 5;
      // const isAtLeastOneDigitUpperCaseSpecialCharacter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
      const atLestOneDigit = /\d{1}/.test(e.target.value);
      isValidForm = isGreaterThanFive && atLestOneDigit;
    }

    if (isValidForm) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  }

  const userInfoUpdate = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('user name Update successful');
    }).catch(function (error) {
     console.log(error);
    });
  }
  const handleFBLogin = () =>{
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
    console.log(result.user);
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  return (
    <div className="App-header">
      {
        user.isSignIn ? <button onClick={handleSignOut} >Sign Out</button> : <button onClick={handleSignIn} >Sign In</button>
      }
      <br/>
      <button onClick={handleFBLogin}>FaceBook Login</button>
      {
        user.isSignIn && <div>
          <h1>Welcome, Mr. {user.name}</h1>
          <p>Your Email : {user.email}</p>
          <img src={user.image} alt="" />
        </div>
      }

      {/* User Registration From */}

      <h1>Our Own Authentication</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} id="" />
        <label htmlFor="">Is New User</label> <br />
        {newUser && <input type="text" name="name" placeholder="name" onBlur={handleBlur} />}<br />
        <input type="text" name="email" onBlur={handleBlur} placeholder="your email" required /><br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="your password" required /><br />
        <input type="submit" value={ newUser ? 'Sign Up' : 'Sign In'} />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} successfully</p>}
    </div>
  );
}

export default App;
