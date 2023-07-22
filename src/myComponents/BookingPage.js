import React, { useState, useContext, useCallback } from "react";
import "../myStyles/BookingPage.css";
import ImageCarousel from "./ImageCarousel";
import { useParams } from "react-router-dom";
import venueContext from "../context/venues/venueContext";
import { useEffect } from "react";
// import Cookies from "js-cookie"
import ReactStars from "react-rating-stars-component";

export default function BookingPage() {
  const { id } = useParams();
  const context = useContext(venueContext);
  const {
    venue,
    fetchVenueById,
    addBookmark,
    removeBookmark,
    isVenueBookmarked,
    isBookmarked,
  } = context;
  const [isBm, setisBm] = useState(false);
  const fetchVenueAndBookmarks = useCallback(async () => {
    await fetchVenueById(id);
  }, [fetchVenueById, id]);

  useEffect(() => {
    fetchVenueAndBookmarks();
    isVenueBookmarked(id);
    setisBm(isBookmarked);
  }, [fetchVenueAndBookmarks, id, isBookmarked, isVenueBookmarked]);

  // useEffect(() => {
  //   fetchBookmarks();
  // });

  const handleOnClick = async () => {
    if (!isBm) {
      addBookmark(id);
    } else {
      removeBookmark(id);
    }
    setisBm((prevIsBookmarked) => !prevIsBookmarked);
  };

  return (
    <div className="venuePage">
      <div className="largestContainer">
        <div className="imagesContainer">
          {venue && venue.images && <ImageCarousel images={venue.images} />}
          <div className="bookingButtons">
            <button className="book">Book Now !</button>
            <button
              className={isBm ? "bookmarked" : "notBookmarked"}
              onClick={handleOnClick}
            >
              {isBm ? "✔ Bookmarked" : "Bookmark"}
            </button>
          </div>
        </div>

        <div className="detailContainer">
          <h1 className="pageBigText">{venue.name}</h1>
          <h2 className="pageMediumText">
            <span>
              <ReactStars
                count={5}
                value={4.5}
                edit={false}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </span>
          </h2>
          <h3 className="pageMediumText">Manager Says : </h3>
          <p className="pageSmallText">{venue.description}</p>
          <div className="detailsFooter">
            <h2 className="pageMediumText">Specialities :</h2>
            {venue &&
              venue.events &&
              venue.events.map((event) => {
                return (
                  <div className="plans">
                    <span className="pageSmallText">{event.eventName} :</span>
                    <span className="pricing">
                      <span className="pageSmallerText">plans start at </span>
                      <span className="pricing">₹ {event.eventPrice}</span>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
