import booksReducer, {initialBookState} from '../../reducers/book';
import { BOOKS_LOAD, BOOKS_LOADED, BOOKS_ERROR, CHANGE_CATEGORY } from '../../constants/BookActionTypes';

describe('Books Reducer', () => {
  it('returns the initial state', () => {
    expect(booksReducer(undefined, {})).toMatchSnapshot();
  });

  it('returns updated state on loading books', () => {
    const reducer = booksReducer(initialBookState, { type: BOOKS_LOAD });

    expect(reducer.isLoading).toBe(true);
    expect(reducer.books.length).toBe(0);
  });

  it('returns updated state on books are loaded', () => {
    const reducer = booksReducer(initialBookState, {
      type: BOOKS_LOADED,
      payload: [ {}, {}]
    });

    expect(reducer.isLoading).toBe(false);
    expect(reducer.books.length).toBe(2);
  });

  it('returns updated state on error', () => {
    const reducer = booksReducer(initialBookState, {
      type: BOOKS_ERROR,
      payload: 'This is the sample error while loading books'
    });

    expect(reducer.isLoading).toBe(false);
    expect(reducer.books.length).toBe(0);
    expect(reducer.error).toBe('This is the sample error while loading books');
  });

  it('returns updated state on category change', () => {
    const reducer = booksReducer(initialBookState, {
      type: CHANGE_CATEGORY,
      payload: 'changed-category-name'
    });

    expect(reducer.isLoading).toBe(false);
    expect(reducer.books.length).toBe(0);
    expect(reducer.category).toBe('changed-category-name');
  });
});
