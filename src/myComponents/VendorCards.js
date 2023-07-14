import React from 'react'
import "../myStyles/VendorCard.css"
import cake from "../myImages/cake.jpg";
export default function VendorCards() {
  return (
    <div className="vendorCards">
        <div className="vendorImage">
            <img src={cake} alt="cakes"/>
        </div>
        <div className="vendorDetails">
            <div className="vendorName">Cakes and Bakes</div>
            <div className="rating">Rating : 4.7/5</div>
            <button className="bookNow">Order Now !</button>
        </div>
    </div>
  )
}
