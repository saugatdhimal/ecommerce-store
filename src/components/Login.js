import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from '../firebase'
import { user } from "../actions/action"
import { useDispatch } from "react-redux";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
          if(auth){
            db.collection('users').doc(auth.user.uid).get().then(doc => {
              dispatch(user(doc.data()))
            })
            history.push('/')
          }
        })
        .catch((error) => alert(error.message));
      }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.wtvq.com/wp-content/uploads/2020/02/Amazon.jpg"
        />
      </Link>
      <div className="login__container">
        <h1> Sign-In</h1>
        <form>
          <h5>E-MAIL</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>PASSWORD</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__signInButton" type="submit" onClick={signIn}>
            SIGN IN
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p>OR</p>
      <Link to="/register">
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </Link>
    </div>
  );
}

export default Login;
