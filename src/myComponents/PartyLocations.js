import React, {useContext} from "react";
import "../myStyles/PartyLocations.css";
import LocationCards from "./LocationCards";
import venueContext from "../context/venues/venueContext";
import { useEffect } from "react";


export default function PartyLocations() {
  const context =useContext(venueContext);
  const {venues, fetchVenues} = context;
  useEffect(() => {
    fetchVenues();
  })
  

  return (
    <section id="locations">
      <h1 className="locationsHeading">
        Choose From our top locations in Dhanbad
      </h1>
      <div className="venues">
        {
          venues.map((venue)=>{
            
            return <LocationCards venue={venue} key={venue._id}/>
          })
        }
      </div>
      <div className="pageBottom">
        <h1 className="bottomHeading">
          Searching for a specific Event? Choose From :{" "}
        </h1>
        <a href="/services/event-birthday" className="anchors">
          <button className="bottombtn">Birthday</button>
        </a>
        <a href="/services/event-reunion" className="anchors">
          <button className="bottombtn">Reunion</button>
        </a>
        <a href="/services/event-anniversary" className="anchors">
          <button className="bottombtn">Anniversary</button>
        </a>
      </div>
    </section>
  );
}
