import { connect } from 'react-redux';

import { loadBooks } from '../actions/BookActions';
import BookList from '../components/BookList';

export const mapDispatchToProps = () => {
  return { loadBooksFromApi: loadBooks };
};

export const mapStateToProps = store => {
  return { booksStore: store.booksStore };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
