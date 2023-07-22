import React, { useContext } from "react";
import "../myStyles/Bookmark.css";
import { Link, useNavigate } from "react-router-dom";
import removeIcon from "../myImages/trash.png";
import ReactStars from "react-rating-stars-component";
import venueContext from "../context/venues/venueContext";

export default function Bookmark({ bookmark }) {
  const navigate = useNavigate();
  const context = useContext(venueContext);
  const { removeBookmark } = context;
  const handleOnclick = () => {
    removeBookmark(bookmark._id);
    navigate(0);
  };
  return (
    <Link to={`/book-venue/${bookmark._id}`} className="linkContainer">
      <div className="bookmarkBox">
        <div className="bookmarkImage">
          <img src={bookmark.images[0].url} alt="" />
        </div>
        <div className="bookmarkDetails">
          <h1 className="bookmarkHeading">{bookmark.name}</h1>
          <div className="bookmarkRating">
            <span>
              <ReactStars
                count={5}
                value={4.5}
                edit={false}
                size={25}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </span>
          </div>
          <div className="bookmarkEvents">
            {/* <div className="bEvent"> | </div> */}
            {bookmark &&
              bookmark.events &&
              bookmark.events.map((event) => {
                return (
                  <React.Fragment key={event._id}>
                    <div className="bEvent">{event.eventName}</div>
                    <div className="bEvent"> | </div>
                  </React.Fragment>
                );
              })}
          </div>
          <div className="removeIcon" onClick={handleOnclick}>
            <img src={removeIcon} alt="remove" />
          </div>
        </div>
      </div>
    </Link>
  );
}
