import React from 'react'
import "../myStyles/BirthdaysEvent.css"
import LocationCards from './LocationCards'
import VendorCards from './VendorCards'
import venueContext from "../context/venues/venueContext";
import { useEffect, useContext } from "react";



export default function BirthdaysEvent() {
  const context =useContext(venueContext);
  const {venues, fetchVenuesByEventType} = context;
  useEffect(() => {
    fetchVenuesByEventType("Birthdays");
  })
  

  return (
    <section id="bithdayEvent">
      <h1 className="pageHeading">
        Let's Throw the best birthday party ever !
      </h1>
      <h2 className="secondHeading">
        Top venues from our lists :
      </h2>
      <div className="birthdayLocations">
          {
            venues.map((venue)=>{
              return <LocationCards venue={venue}/>
            })
          }
      </div>
      <div className="vendorList">
        <h2 className="secondHeading">
          Order your cakes in Advance from :
        </h2>
        <div className="cakeVendors">
          <VendorCards/>
          <VendorCards/>
          <VendorCards/>
          <VendorCards/>
        </div>
      </div>
    </section>
  )
}
