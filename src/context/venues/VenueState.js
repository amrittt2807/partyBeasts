import React, { useState } from "react";
import VenueContext from "./venueContext";
import Cookies from "js-cookie";

const VenueState = (props) => {
  const [venues, setVenues] = useState([]);
  const [venue, setVenue] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [isBookmarked, setisBookmarked] = useState(false);
  const [userDetails, setuserDetails] = useState({});

  const fetchUser = async () => {
    const response = await fetch(
      `https://party-beasts-api.onrender.com/api/v1/me/${Cookies.get("userId")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    const { user } = data;

    setuserDetails(user);
  };

  const fetchVenues = async () => {
    const response = await fetch("https://party-beasts-api.onrender.com/api/v1/venues", {
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
      `https://party-beasts-api.onrender.com/api/v1/venues/event-type/${eventName}`,
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
      `https://party-beasts-api.onrender.com/api/v1/venues/${venueId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const { venue } = data;
    setVenue(venue);
  };

  const fetchBookmarks = async () => {
    const response = await fetch(
      `https://party-beasts-api.onrender.com/api/v1/bookmarks/${Cookies.get("userId")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: "token",
        },
      }
    );
    const data = await response.json();
    const { bookmarks } = data;
    setBookmarks(bookmarks);
  };

  const addBookmark = async (id) => {
    await fetch(`https://party-beasts-api.onrender.com/api/v1/bookmark/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: "token",
      },
      body: JSON.stringify({
        id: id,
        userId: `${Cookies.get("userId")}`,
      }),
    });
    fetchBookmarks();
  };

  const removeBookmark = async (id) => {
    await fetch(`https://party-beasts-api.onrender.com/api/v1/bookmarks/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: "token",
      },
      body: JSON.stringify({
        id: id,
        userId: `${Cookies.get("userId")}`,
      }),
    });
    fetchBookmarks();
  };

  const isVenueBookmarked = async (id) => {
    const response = await fetch(
      `https://party-beasts-api.onrender.com/api/v1/bookmarks/find/${Cookies.get(
        "userId"
      )}/${id}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Cookie: "token",
        },
      }
    );
    const data = await response.json();
    const { isBookmarked } = data;
    setisBookmarked(isBookmarked);
  };

  return (
    <VenueContext.Provider
      value={{
        venues,
        fetchVenues,
        fetchVenuesByEventType,
        venue,
        fetchVenueById,
        bookmarks,
        fetchBookmarks,
        removeBookmark,
        addBookmark,
        isVenueBookmarked,
        isBookmarked,
        userDetails,
        fetchUser,
      }}
    >
      {props.children}
    </VenueContext.Provider>
  );
};

export default VenueState;
