import * as React from 'react';
import axios from '../../utilities/api';
import BookService from '../../services/Book.service';
import BookList from '../../components/BookList';
import { loadBooks } from '../../actions/BookActions';

describe('BookList Component', () => {
  const props = {
    loadBooksFromApi: loadBooks,
    booksStore: {
      isLoading: false,
      books: [],
      error: null,
      category: 'fiction',
    }
  };

  describe('when rendering the component', () => {
    it('renders the component without any error', () => {
      shallow(<BookList {...props} />);
    });

    it('matches the snapshot', () => {
      expect(toJson(shallow(<BookList {...props} />))).toMatchSnapshot();
    });
  });

  describe('when there are no books', () => {
    it('displays no books found message as there are no books in the list initially', () => {
      const component = shallow(<BookList {...props} />);
      expect(component.find('.no-books-container').length).toBe(1);
      expect(component.find('.no-books-container').text()).toBe('No Books found!');
    });
  });

  describe('when there are books', () => {
    it('displays books list if there are books in the list', () => {
      props.booksStore.books = [{
        amazon_product_url: 'https://some-path-one',
        book_details: [{
          title: 'Book One',
          description: 'Book One Description',
          primary_isbn13: 759723497592
        }]
      },
      {
        amazon_product_url: 'https://some-path-two',
        book_details: [{
          title: 'Book Two',
          description: 'Book Two Description',
          primary_isbn13: 231423480984
        }]
      }];

      const component = shallow(<BookList {...props} />);
      expect(component.find('li').length).toBe(2);
    });
  });

  describe('when the component is mounted ', () => {
    it('calls BookService`s getBooks() with expected category as parameter', () => {
      const spy = jest.spyOn(BookService, 'getBooks');
      const wrapper = shallow(<BookList {...props} />);

      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalledWith(props.booksStore.category);
    });

    it('calls axios`s get() with expected books api path', () => {
      const spyAxios = jest.spyOn(axios, 'get');
      const wrapper = shallow(<BookList {...props} />);

      wrapper.instance().forceUpdate();
      expect(spyAxios).toHaveBeenCalledWith('lists.json?list-name=fiction&api-key=6ad84e249d054efeaefe1abb8f89df5b');
    });
  });
});

