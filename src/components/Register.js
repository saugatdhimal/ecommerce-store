import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from '../firebase'
import { user } from "../actions/action"
import { useDispatch } from "react-redux";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch()
  

  const register = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
         db.collection('users').doc(auth.user.uid).set({
         firstname: firstname,
         lastname: lastname
        })
        dispatch(user({firstname: firstname, lastname: lastname}))
      })
      .catch((error) => alert(error.message));
    history.push('/')
    alert('Successfully registered')
    }
  return (
    <div className="register">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.wtvq.com/wp-content/uploads/2020/02/Amazon.jpg"
        />
      </Link>
      <div className="register__container">
        <h1> Sign-In</h1>
        <form>
          <h5>FIRSTNAME</h5>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <h5>LASTNAME</h5>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
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

          <button className="register__button" type="submit" onClick={register}>
            Register
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Register;
