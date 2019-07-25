// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from 'redux';

import booksStore from './book';

export default combineReducers({ booksStore });
