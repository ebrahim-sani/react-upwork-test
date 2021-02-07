import React from "react";
import "./Gallery-items.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function GalleryItem({
  book_image,
  book_name,
  date_submitted,
  submitted_by,
  votes,
  profile_img,
}) {
  return (
    <div className="items">
      <div className="book_poster">
        <img src={book_image} alt="book_poster" />
      </div>
      <div className="item_overview">
        <div className="about_item">
          <h4>{book_name}</h4>
          <p>Date Submitted - {date_submitted}</p>
        </div>
        <div className="submission">
          <p>
            Submitted by:
            <AccountCircleIcon src={profile_img} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
