import booksReducer from '../../reducers/book';

describe('Books Reducer', () => {
  it('returns the initial state', () => {
    expect(booksReducer(undefined, {})).toMatchSnapshot();
  });
});
