import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const { state } = useLocation();

  async function loginHandler() {
    try {
      const response = await axios.post(
        "https://stonksmotion-rest-api.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );

      if (!response.data.token) {
        setError(response.data);
      } else {
        setAuth(response.data);
        setAuth((prev) => {
          localStorage.setItem("auth", JSON.stringify(prev));
          return prev;
        });

        navigate(state?.from ? state.from : "/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function emailHandler(event) {
    setEmail(event.target.value);
    console.log(email);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
    console.log(password);
  }
  return (
    <div>
      <input
        className="input"
        placeholder="Enter your email"
        onChange={emailHandler}
      />
      <input placeholder="Enter your password" onChange={passwordHandler} />

      <button onClick={loginHandler}>Login</button>

      {error && (
        <p className="errorMessage" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <p>
        Don't have an account, <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}
