import React, { useContext } from "react";
import "../myStyles/BookmarksPage.css";
import Bookmark from "./Bookmark";
import venueContext from "../context/venues/venueContext";
import { useEffect } from "react";

export default function BookmarksPage() {
  const context = useContext(venueContext);
  const { bookmarks, fetchBookmarks } = context;
  useEffect(() => {
    fetchBookmarks();
  });

  return (
    <div id="BookmarksPage">
      <h1 className="pageHeading">Your Bookmarks</h1>
      {bookmarks && bookmarks.map((bookmark) => {
        return <Bookmark bookmark={bookmark} key={bookmark._id} />;
      })}
    </div>
  );
}
