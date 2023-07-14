import React, { useState, useContext } from "react";
import "../myStyles/BookingPage.css";
import ImageCarousel from "./ImageCarousel";
import { useParams } from "react-router-dom";
import venueContext from "../context/venues/venueContext";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";

export default function BookingPage() {
  const { id } = useParams();
  const context = useContext(venueContext);
  const { venue, fetchVenueById } = context;
  useEffect(() => {
    fetchVenueById(id);
  }, [fetchVenueById, id]);

  const [isBookmarked, setisBookmarked] = useState(false);
  const [text, settext] = useState("Bookmark");
  const handleOnClick = () => {
    setisBookmarked(!isBookmarked);
    !isBookmarked ? settext("✔ Bookmarked") : settext("Bookmark");
  };
  return (
    <div className="venuePage">
      <div className="largestContainer">
        <div className="imagesContainer">
          {venue && venue.images && <ImageCarousel images={venue.images} />}
          <div className="bookingButtons">
            <button className="book">Book Now !</button>
            <button
              className="bookmark"
              onClick={handleOnClick}
              style={{ background: isBookmarked ? "Green" : "" }}
            >
              {text}
            </button>
          </div>
        </div>

        <div className="detailContainer">
          <h1 className="pageBigText">{venue.name}</h1>
          <h2 className="pageMediumText">
          <span><ReactStars
              count={5}
              value={4.5}
              edit={false}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            /></span>
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
