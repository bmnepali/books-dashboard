import axios from 'axios';

const BooksService = {
  getBooks(category) {
    return axios
      .get(
        'https://api.nytimes.com/svc/books/v3/lists.json?list-name=' +
          category +
          '&api-key=6ad84e249d054efeaefe1abb8f89df5b',
      )
      .then(response => response);
  },
};

export default BooksService;
