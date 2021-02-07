import React, { useState } from "react";
import "./Gallery-items.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router-dom";

function GalleryItem({
  book_image,
  book_name,
  date_submitted,
  votes,
  profile_img,
}) {
  const [voted, setVoted] = useState(false);
  const history = useHistory();
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
          <div className="counter_icon">
            {voted ? (
              <ThumbUpAltOutlinedIcon className="icon" />
            ) : (
              <ThumbUpAltIcon
                className="icon"
                onClick={(e) => setVoted(true)}
              />
            )}
            <p>55</p>
          </div>

          <div className="comment_icon">
            <CommentIcon className="icon" />
            <p>13</p>
          </div>

          <div className="share_icon">
            <ShareIcon onClick={() => history.push("/add")} className="icon" />
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
