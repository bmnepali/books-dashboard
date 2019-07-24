import React from 'react';
import PropTypes from 'prop-types';

const BookTypes = props => {
  return (
    <section>
      <h3 className="sidebar-heading">Book Types</h3>
      <ul className="nav flex-column mb-2">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => props.changeCategory('Biography')}>
            Biography
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => props.changeCategory('Kids')}>
            Kids
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => props.changeCategory('Sports')}>
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => props.changeCategory('Hardcover Fiction')}>
            Fiction
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => props.changeCategory('Drama')}>
            Drama
          </a>
        </li>
      </ul>
    </section>
  );
};

BookTypes.propTypes = {
  changeCategory: PropTypes.func.isRequired,
};

export default BookTypes;
