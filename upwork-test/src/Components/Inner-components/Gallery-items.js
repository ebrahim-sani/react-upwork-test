import React from "react";
import "./Gallery-items.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

function GalleryItem({
  book_image,
  book_name,
  date_submitted,
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
          <p>
            By: <AccountCircleIcon src={profile_img} />
          </p>
        </div>
        <div className="icons">
          <FavoriteBorderIcon className="icon" />
          <CommentIcon className="icon" />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
