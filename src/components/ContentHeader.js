import React from 'react';
import PropTypes from 'prop-types';

const ConentHeader = props => {
  return (
    <section className="page-header">
      <h2>My Books</h2>
      <div className="book-category-filter">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle btn-shadow btn-rounded"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {props.category || 'All Categories'}
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={() => props.changeCategory('Biography')}>
              Biography
            </a>
            <a className="dropdown-item" onClick={() => props.changeCategory('Kids')}>
              Kids
            </a>
            <a className="dropdown-item" onClick={() => props.changeCategory('Sports')}>
              Sports
            </a>
            <a className="dropdown-item" onClick={() => props.changeCategory('Hardcover Fiction')}>
              Fiction
            </a>
            <a className="dropdown-item" onClick={() => props.changeCategory('Drama')}>
              Drama
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

ConentHeader.propTypes = {
  category: PropTypes.string,
  changeCategory: PropTypes.func,
};

export default ConentHeader;
