import React from "react";
import "../myStyles/NavbarStyle.css";
import logo from "../myImages/logo.png";
import { useNavigate , useLocation} from "react-router-dom";
import Cookies from "js-cookie";




export default function Navbar() {
  const location=useLocation();

  const navigate= useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <nav id="navbar">
      <div id="left">
        <div id="logo">
          <img src={logo} alt="PartyBeasts.com" />
        </div>
        <ul>
          <li className="item" >
            <a href="/" className={`${location.pathname === "/" ? "active" : ""}`}>Home</a>
          </li>
          <li className="item">
            <a href="/party-locations" className={`${location.pathname === "/party-locations" ? "active" : ""}`}>Party Locations</a>
          </li>
          <li className="item">
            <a href="/services" className={`${location.pathname === "/services" ? "active" : ""}`}>Services</a>
          </li>
          <li className="item">
            <a href="/about-us" className={`${location.pathname === "/about-us" ? "active" : ""}`}>About Us</a>
          </li>
          <li className="item">
            <a href="/contact-us" className={`${location.pathname === "/contact-us" ? "active" : ""}`}>Contact Us</a>
          </li>
        </ul>
      </div>
      <div id="right">
        {!Cookies.get("token") ? (
          <ul>
            <div className="signBtns">
              <a href="/sign-in">
                <button className="signButtons">Sign In</button>
              </a>
              <a href="/sign-up">
                <button className="signButtons">Sign Up</button>
              </a>
            </div>
          </ul>
        ) : (
          <div className="signBtns">
              <button className="signButtons" onClick={handleLogout}>
                Logout
              </button>
          </div>
        )}
      </div>
    </nav>
  );
}
