import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const bookCoverPath = 'https://s1.nyt.com/du/books/images/';
  const bookDetails = book.book_details[0];
  const bookCoverImage = bookDetails.primary_isbn13 ? bookCoverPath + bookDetails.primary_isbn13 + '.jpg' : '';
  const fallBackImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png';

  return (
    <article className="media book-card">
      <object data={bookCoverImage} type="image/jpeg">
        <img src={fallBackImage} alt={bookDetails.title} />
      </object>
      <div className="media-body">
        <h5 className="mt-1">{bookDetails.title}</h5>
        <p>{bookDetails.description}</p>
        <div className="action-bar">
          <a href="#" className="btn btn-rounded btn-secondary">
            Read More
          </a>
          <span className="share-book">
            <i className="icon ion-md-share" />
          </span>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    book_details: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Book;
