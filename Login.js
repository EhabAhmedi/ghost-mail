import { Button } from "@mui/material";
import React, { useContext } from "react";
import {  login, logout } from "./features/counter/userSlice";
import { auth, provider } from "./firebase";
import "./login.css";
import { useDispatch } from "react-redux";
import ghost  from "./assets/ghost.png"
import { ThemeContext } from "./App";



function Login() {
const dispatch = useDispatch();


  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch (
        login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))

    })
    .catch(error=> alert(error.message));
    
  };
  const {theme} = useContext(ThemeContext)
  return (
    <div className="login" id={theme}>
      <div className="login__container">
        <img
          src={ghost}
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
