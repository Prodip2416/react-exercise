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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


firebase.initializeApp(firebaseConfig);

function Login() {
    const [user, setUser] = useState({ name: '', email: '', img: '', isSignIn: false });
    const [isNewUser, setIsNewUser] = useState(false);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const faceBookProvider = new firebase.auth.FacebookAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();


    const googleSignIn = () => { // Google Sign in
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            setUserData(result);
        }).catch(function (error) {
            console.log(error.code);
        });
    }

    const faceBookSignIn = () => { // FaceBook sign in
        firebase.auth().signInWithPopup(faceBookProvider).then(result => {
            setUserData(result);
        }).catch(function (error) {
            console.log(error.code);
        });
    }

    const githubSignIn = () => { // GitHub sign in
        firebase.auth().signInWithPopup(githubProvider).then(result => {
            setUserData(result);
        }).catch(function (error) {
            console.log(error.code);
            console.log('error');
        });
    }

    const setUserData = (result) => {
        const newUser = { ...user };
        newUser.isSignIn = true;
        newUser.name = result.user.displayName;
        newUser.email = result.user.email;
        newUser.img = result.user.photoURL;
        setUser(newUser);
    }

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            const newUser = { ...user };
            newUser.isSignIn = false;
            setUser(newUser);
            setIsNewUser(false);
        }).catch(function (error) {
            console.log(error.code);
        });
    }

    const handleSubmit = (e) => {
        if (isNewUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    userInfoUpdate(user.name);
                    setUserData(res);
                })
                .catch(function (error) {
                    console.log(error.code);
                    console.log(error.message);
                });
        } else if (!isNewUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUserData(res);
                })
                .catch(function (error) {
                    console.log(error.code);
                    console.log(error.message);
                });
        }

        e.preventDefault();
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

    const handleBlur = (e) => {
        let isValidForm = true;
        if (e.target.name === 'email') {
            isValidForm = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const greaterThanFive = e.target.value.length > 4;
            const mustOneDigit = /\d{1}/.test(e.target.value);
            isValidForm = greaterThanFive && mustOneDigit;
        }
        if (isValidForm) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        } else {
            console.log('Please provide email and password');
        }
    }

    return (
        <div className="login-form">
            {
                user.isSignIn ? <Welcome signOut={signOut} user={user} />
                    : <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                        <Box m={3} mt={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                        onClick={() => setIsNewUser(!isNewUser)}
                                    />
                                }
                                label="Is New User"
                            />
                        </Box>
                        {
                            isNewUser && <Box m={3} mt={3} >
                                <TextField id="outlined-basic" onBlur={handleBlur} name="name" label="name" variant="outlined" />
                            </Box>
                        }
                        <Box m={3} mt={3} >
                            <TextField id="outlined-basic" onBlur={handleBlur} name="email" label="Email" variant="outlined" />
                        </Box>
                        <Box m={3}>
                            <TextField id="outlined-basic" onBlur={handleBlur} type="password" label="Password" name="password" variant="outlined" />
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
