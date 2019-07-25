import { BOOKS_LOAD, BOOKS_LOADED, BOOKS_ERROR, CHANGE_CATEGORY } from '../constants/BookActionTypes';

export const initialBookState = {
  isLoading: false,
  books: [],
  error: null,
  category: 'Hardcover Fiction',
};

export default function reducer(state = initialBookState, action) {
  switch (action.type) {
    case BOOKS_LOAD:
      return { ...state, isLoading: true };
    case BOOKS_LOADED:
      return { ...state, books: action.payload, isLoading: false };
    case BOOKS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case CHANGE_CATEGORY:
      return { ...state, category: action.payload, isLoading: false };
    default:
      return state;
  }
}
