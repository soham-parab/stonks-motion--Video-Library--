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
import { useToast } from "../../contexts/toastContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { auth, setAuth } = useAuth();
  const { toast } = useToast();
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
        toast("Logged in!", { type: "success" });
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
    <div className="main-div">
      <div className="main-div-two">
        <input
          className="input-login"
          placeholder="Enter your email"
          onChange={emailHandler}
        />
        <input
          type="password"
          className="input-login"
          placeholder="Enter your password"
          onChange={passwordHandler}
        />

        <button className="login-button" onClick={loginHandler}>
          Login
        </button>

        {error && (
          <p className="errorMessage" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <p>
          Don't have an account,{" "}
          <Link className="login-link" to="/register">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
