import { connect } from 'react-redux';

import { changeCategory } from '../actions/BookActions';
import ContentHeader from '../components/ContentHeader';

export const mapDispatchToProps = dispatch => {
  return {
    changeCategory: category => {
      dispatch(changeCategory(category));
    },
  };
};

export const mapStateToProps = store => {
  return {
    category: store.booksStore.category,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentHeader);
