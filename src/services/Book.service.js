import http from '../utilities/api';

const BooksService = {
  getBooks(category) {
    return http.get('lists.json?lis-name=' + category + '&api-key=6ad84e249d054efeaefe1abb8f89df5b').then(
      response => Promise.resolve(response),
      error => {
        return Promise.reject(error);
      },
    );
  },
};

export default BooksService;
