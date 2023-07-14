import React from "react";
import "../myStyles/AnniversaryEvent.css";
import LocationCards from "./LocationCards";
import VendorCards from "./VendorCards";
import venueContext from "../context/venues/venueContext";
import { useEffect, useContext } from "react";

export default function AnniversaryEvent() {
  const context =useContext(venueContext);
  const {venues, fetchVenuesByEventType} = context;
  useEffect(() => {
    fetchVenuesByEventType("Anniversaries");
  })


  return (
    <section id="anniversaryEvent">
      <h1 className="pageHeading">
        The Most Special Venues For Your Special One!
      </h1>
      <h2 className="secondHeading">Top couple friendly venues from our lists :</h2>
      <div className="birthdayLocations">
          {
            venues.map((venue)=>{
              return <LocationCards venue={venue}/>
            })
          }
      </div>
      <div className="anniversaryVendorList">
        <h2 className="secondHeading">Order your cakes in Advance from :</h2>
        <div className="cakeVendors">
          <VendorCards />
          <VendorCards />
          <VendorCards />
          <VendorCards />
        </div>
      </div>
      <div className="anniversaryVendorList">
        <h2 className="secondHeading">Get the most beautiful setup done by our specialists :</h2>
        <div className="cakeVendors">
          <VendorCards />
          <VendorCards />
          <VendorCards />
          <VendorCards />
        </div>
      </div>
    </section>
  );
}
