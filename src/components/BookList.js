import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  // Executes after the component is mounted
  componentDidMount() {
    this.props.loadBooksFromApi(this.props.booksStore.category);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.booksStore.category !== nextProps.booksStore.category) {
      this.props.loadBooksFromApi(nextProps.booksStore.category);
    }
  }

  render() {
    let view = null;

    if (this.props.booksStore.isLoading) {
      view = (
        <div className="loader">
          <div className="spinner" />
        </div>
      );
    } else if (this.props.booksStore.error) {
      view = (
        <div className="alert alert-danger" role="alert">
          <strong>Hey there!</strong> {this.props.booksStore.error}
        </div>
      );
    } else {
      if (!this.props.booksStore.isLoading && this.props.booksStore.books.length) {
        view = (
          <ul className="row book-list">
            {this.props.booksStore.books.map(book => (
              <li key={book.amazon_product_url} className="col-lg-6 item-book">
                <Book book={book} />
              </li>
            ))}
          </ul>
        );
      } else {
        view = (
          <div className="no-books-container">
            <i className="icon ion-md-sad" />
            No Books found!
          </div>
        );
      }
    }

    return view;
  }
}

BookList.propTypes = {
  loadBooksFromApi: PropTypes.func.isRequired,
  booksStore: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookList;
