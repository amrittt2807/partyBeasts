import React from 'react'
import location from "../myImages/location.png";
// import image from "../myImages/image.jpg";
import "../myStyles/LocationCards.css"
import { Link } from 'react-router-dom'

//CAN USE REACT STARS !!!
// import ReactStars from "react-rating-stars-component"

export default function LocationCards({venue}) {
  return (
    <div className="card">
        <div className="cardImage">
            <img src={venue.images[0].url} alt="location"/>
        </div>
        <div className="cardText">
            <div className="cardHead">
                <div className="cardTitle">
                    {venue.name}
                </div>
                <Link to={`/book-venue/${venue._id}`}>
                <button className="bookButton">
                    Book Now!
                </button>
                </Link>
                
            </div>
            <div className="details">
                <div>
                   <span className="plan">Plans start at </span>
                   <span className="price"> ₹{venue.price}/-</span>
                    <p>Rated : (4.3/5)</p>
                </div>
                <a href={venue.location} target="blank"><img src={location} alt=""/></a>
            </div>
        </div>
    </div>
  )
}
