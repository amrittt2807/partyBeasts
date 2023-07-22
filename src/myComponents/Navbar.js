import React from "react";
import "../myStyles/NavbarStyle.css";
import logo from "../myImages/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Dropdown } from "./Dropdown";
import venueContext from "../context/venues/venueContext";
import { useEffect, useContext, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const context = useContext(venueContext);
  // const { userDetails, fetchUser } = context;
  const [loading, setloading] = useState(false);
  const [username,setUsername]=useState("");
  const [userDetails, setuserDetails] = useState({});

  useEffect(() => {
    function func(){
      setloading(true)
       fetch(
        `https://party-beasts-api.onrender.com/api/v1/me/${Cookies.get("userId")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json())
      .then((data) => {
        setuserDetails(data.user);
        setUsername(data.user?.name);
        setloading(false);
        
      });
  
      
    
      

      // console.log(userDetails.name)
      // setloading(false);
      
    }
    Cookies.get("userId") && func();
  }, [userDetails?.name]);



  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    navigate("/");
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    navigate("/bookmarks");
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    handleLogout();
    setOpen(false);
  };

 

  return (
    <nav id="navbar">
      <div id="left">
        <div id="logo">
          <img src={logo} alt="PartyBeasts.com" />
        </div>
        <ul>
          <li className="item">
            <a
              href="/"
              className={`${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </a>
          </li>
          <li className="item">
            <a
              href="/party-locations"
              className={`${
                location.pathname === "/party-locations" ? "active" : ""
              }`}
            >
              Party Locations
            </a>
          </li>
          <li className="item">
            <a
              href="/services"
              className={`${location.pathname === "/services" ? "active" : ""}`}
            >
              Services
            </a>
          </li>
          <li className="item">
            <a
              href="/about-us"
              className={`${location.pathname === "/about-us" ? "active" : ""}`}
            >
              About Us
            </a>
          </li>
          <li className="item">
            <a
              href="/contact-us"
              className={`${
                location.pathname === "/contact-us" ? "active" : ""
              }`}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div id="right">
        {!Cookies.get("token") ? (
          // Show Sign In/Sign Up buttons if user is not authenticated
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
        ) : !loading ? ( // Check if userDetails is available
          // Show Dropdown if user is authenticated and userDetails is available
          <div className="signBtns">
            <Dropdown
              open={open}
              trigger={
                <button
                  onClick={handleOpen}
                  className={`dropdownNav toggle-btn ${open ? "active" : ""}`}
                >
                  {username}
                  <span className="arrow"></span>
                </button>
              }
              menu={[
                <button onClick={handleMenuOne} className="dropdownNav">
                  Your Bookmarks
                </button>,
                <button onClick={handleMenuTwo} className="dropdownNavLO">
                  Logout
                </button>,
              ]}
            />
          </div>
        ) : (
          // Show loading state or placeholder if userDetails is still being fetched
          <div className="signBtns">Loading...</div>
        )}
      </div>
    </nav>
  );
}