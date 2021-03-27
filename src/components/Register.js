import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
          <h5>USERNAME</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <button className="register__button" type="submit">
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
