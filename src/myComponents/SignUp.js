import React from "react";
import "../myStyles/SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(credentials.password===credentials.cpassword){
      const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      Cookies.set("token", json.authToken);
      navigate(-1);
    } else {
      alert("Invalid Credentials !");
    }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="signUpPage"></div>
      <div className="signUpContainer">
        <div className="signUpCard">
          <h1 className="topHeading">Please enter your details to register</h1>
          <form className="userDetailsSignUp" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              // value={credentials.email}
              onChange={onChange}
              minLength={1} required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              // value={credentials.email}
              onChange={onChange}
              minLength={5} required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              // value={credentials.password}
              onChange={onChange}
              minLength={5} required
            />
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              // value={credentials.password}
              onChange={onChange}
              minLength={5} required
            />
            {credentials.password!==credentials.cpassword?<h3 className="alertMessage">Passwords don't match !</h3>:<></>}
            <button className="formSubmit" type="submit">
              Login
            </button>
            <div className="bottomMessage"><h2 >Already have an account ? </h2><a href="/sign-in">Sign-in</a></div>
            
          </form>
        </div>
      </div>
    </>
  );
}
