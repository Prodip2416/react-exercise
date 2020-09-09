import React, { useState } from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
//npm i--save @fortawesome/free-brands-svg-icons 
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import Welcome from '../Welcome/Welcome';


firebase.initializeApp(firebaseConfig);

function Login() {
    const [user, setUser] = useState({naem:'', img:'',isSignIn: false})
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = () =>{
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            var token = result.credential.accessToken;
          console.log(result.user);
          const newUser = {...user};
          newUser.isSignIn= true;
          setUser(newUser);

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
    const handleSignOut = () => {
        firebase.auth().signOut().then(function () {
            const newUser = { ...user };
            newUser.isSignIn = false;
            setUser(newUser);
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <div className="login-form">
            {
                user.isSignIn ? <Welcome handleSignOut={handleSignOut} /> : <form style={{ textAlign: 'center' }}>
                    <Box m={3} mt={3} >
                        <TextField id="outlined-basic" label="email" variant="outlined" />
                    </Box>
                    <Box m={3}>
                        <TextField id="outlined-basic" type="password" label="password" variant="outlined" />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box m={2}><FontAwesomeIcon onClick={googleSignIn} icon={faGoogle} style={{ color: 'red' }} /></Box>
                        <Box m={2}><FacebookIcon color="primary" /></Box>
                        <Box m={2}><GitHubIcon /></Box>
                    </Box>
                    <Box m={2}>
                        <TextField id="outlined-basic" type="submit" variant="outlined" />
                    </Box>
                </form>
            }
            
        </div>
    )
}

export default Login;
