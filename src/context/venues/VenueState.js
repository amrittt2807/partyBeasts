import React, { useState } from "react";
import VenueContext from "./venueContext";

const VenueState = (props) => {
  const [venues, setVenues] = useState([]);
  const [venue, setVenue] =useState({});

  const fetchVenues = async () => {
    const response = await fetch("http://localhost:5000/api/v1/venues", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const { venues } = data;

    setVenues(venues);
  };
  const fetchVenuesByEventType = async (eventName) => {
    const response = await fetch(
      `http://localhost:5000/api/v1/venues/event-type/${eventName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    const { venues } = data;

    setVenues(venues);
  };

  const fetchVenueById = async (venueId) => {
    const response = await fetch(
      `http://localhost:5000/api/v1/venues/${venueId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const {venue}=data;
    setVenue(venue);
  };

  
  return (
    <VenueContext.Provider
      value={{ venues, fetchVenues, fetchVenuesByEventType, venue, fetchVenueById }}
    >
      {props.children}
    </VenueContext.Provider>
  );
};

export default VenueState;
