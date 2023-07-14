import React from "react";
import "../myStyles/ReunionEvents.css";
import LocationCards from "./LocationCards";
import VendorCards from "./VendorCards";
import venueContext from "../context/venues/venueContext";
import { useEffect, useContext } from "react";

export default function ReunionEvents() {
  const context = useContext(venueContext);
  const { venues, fetchVenuesByEventType } = context;
  useEffect(() => {
    fetchVenuesByEventType("Reunions");
  });

  return (
    <section id="reunionEvent">
      <h1 className="pageHeading">And Here We meet Again! WaiTTT...Where?</h1>
      <h2 className="secondHeading">
        Top crowd Friendly venues from our lists :
      </h2>
      <div className="birthdayLocations">
        {venues.map((venue) => {
          return <LocationCards venue={venue} />;
        })}
      </div>
      <div className="DJvendorList">
        <h2 className="secondHeading">Get Djs and best music systems from :</h2>
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
