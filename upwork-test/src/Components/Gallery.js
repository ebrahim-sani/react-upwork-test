import React from "react";
import "../Styles/Gallery.css";
import GalleryItem from "./Inner-components/Gallery-items";

function Gallery() {
  return (
    <div className="gallery">
      <div className="head_title">
        <h2>Popular Books</h2>
      </div>
      <div className="books_list">
        <GalleryItem
          book_image="https://m.media-amazon.com/images/I/51jaw7jyO8L.jpg"
          book_name="Not One of Us"
          date_submitted="02-02-2019"
          submitted_by="Ebrahim"
        />
        <GalleryItem
          book_image="https://m.media-amazon.com/images/I/51jaw7jyO8L.jpg"
          book_name="Not One of Us"
          date_submitted="02-02-2019"
          submitted_by="Ebrahim"
        />
        <GalleryItem
          book_image="https://m.media-amazon.com/images/I/51jaw7jyO8L.jpg"
          book_name="Not One of Us"
          date_submitted="02-02-2019"
          submitted_by="Ebrahim"
        />
        <GalleryItem
          book_image="https://m.media-amazon.com/images/I/51jaw7jyO8L.jpg"
          book_name="Not One of Us"
          date_submitted="02-02-2019"
          submitted_by="Ebrahim"
        />
        <GalleryItem
          book_image="https://m.media-amazon.com/images/I/51jaw7jyO8L.jpg"
          book_name="Not One of Us"
          date_submitted="02-02-2019"
          submitted_by="Ebrahim"
        />
      </div>
    </div>
  );
}

export default Gallery;
