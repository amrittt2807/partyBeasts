import React, { useState } from "react";
import "../myStyles/SignIn.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function SignIn() {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      Cookies.set('token', json.authToken);
      navigate(-1);
    }else{
      alert("Invalid Credentials !")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="signInPage"></div>
    <div className="signInContainer">
      <div className="signInCard">
        <h1 className="topHeading">
          Please enter your email-id and password to log-in
        </h1>
        <form className="userDetails" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
          />
          <button className="formSubmit" type="submit">
            Login
          </button>
          <div className="bottomMessage">
            <h2>New User ?</h2><a href="/sign-up">Register</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
