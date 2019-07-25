import { connect } from 'react-redux';

import { changeCategory } from '../actions/BookActions';
import BookTypes from '../components/BookTypes';

export const mapDispatchToProps = dispatch => {
  return {
    changeCategory: category => {
      dispatch(changeCategory(category));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(BookTypes);
