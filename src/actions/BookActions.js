import { BOOKS_LOAD, BOOKS_LOADED, BOOKS_ERROR, CHANGE_CATEGORY } from '../constants/BookActionTypes';
import BooksService from '../services/Book.service';
import store from '../store';

// Book Actions
export function loadingBooks() {
  return { type: BOOKS_LOAD };
}

export function booksLoaded(payload) {
  return {
    type: BOOKS_LOADED,
    payload: payload,
  };
}

export function errorLoadingBooks(error) {
  return {
    type: BOOKS_ERROR,
    payload: error,
  };
}

export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    payload: category,
  };
}

export function loadBooks(category) {
  store.dispatch(loadingBooks());
  BooksService.getBooks(category)
    .then(response => {
      store.dispatch(booksLoaded(response.data.results));
    })
    .catch(error => {
      errorLoadingBooks(error);
    });
}
