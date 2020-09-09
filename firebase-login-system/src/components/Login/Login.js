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
    const [user, setUser] = useState({ name: '', email: '', img: '', isSignIn: false })
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fackBookProvider = new firebase.auth.FacebookAuthProvider();
    var githubProvider = new firebase.auth.GithubAuthProvider();

    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            console.log(result.user);
            const newUser = { ...user };
            newUser.isSignIn = true;
            newUser.name = result.user.displayName;
            newUser.email = result.user.email;
            newUser.img = result.user.photoURL;
            setUser(newUser);
        }).catch(function (error) {
           console.log(error.code);
        });
    }
    const signOut = () => {
        firebase.auth().signOut().then(function () {
            const newUser = { ...user };
            newUser.isSignIn = false;
            setUser(newUser);
        }).catch(function (error) {
            console.log(error.code);
        });
    }
    const faceBookSignIn = () => {
        firebase.auth().signInWithPopup(fackBookProvider).then(function (result) {
            const newUser = { ...user };
            newUser.isSignIn = true;
            newUser.name = result.user.displayName;
            newUser.email = result.user.email;
            newUser.img = result.user.photoURL;
            setUser(newUser);
        }).catch(function (error) {
            console.log(error.code);
        });
    }
    const githubSignIn = () =>{
        firebase.auth().signInWithPopup(githubProvider).then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error.code);
        });
    }

    return (
        <div className="login-form">
            {
                user.isSignIn ? <Welcome signOut={signOut} user={user} />
                    : <form style={{ textAlign: 'center' }}>
                        <Box m={3} mt={3} >
                            <TextField id="outlined-basic" label="email" variant="outlined" />
                        </Box>
                        <Box m={3}>
                            <TextField id="outlined-basic" type="password" label="password" variant="outlined" />
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box m={2}><FontAwesomeIcon onClick={googleSignIn} icon={faGoogle} style={{ color: 'red' }} /></Box>
                            <Box m={2}><FacebookIcon onClick={faceBookSignIn} color="primary" /></Box>
                            <Box m={2}><GitHubIcon onClick={githubSignIn} /></Box>
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
