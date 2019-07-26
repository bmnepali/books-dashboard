import * as React from 'react';

// Load Component
import Book from '../../components/Book';

describe('Book Component', () => {
  describe('when no props are provided', () => {
    it('renders Book component with an error', () => {
      expect(() => shallow(<Book />)).toThrow();
    });
  });

  describe('when expected props are provided', () => {
    const props = {
      book: {
        book_details: [
          {
            title: 'THE NEW GIRL',
            description: 'Gabriel Allon, the chief of Israeli intelligence, partners with the crown prince of Saudi Arabia, whose daughter is kidnapped.',
            contributor: 'by Daniel Silva',
            author: 'Daniel Silva',
            contributor_note: '',
            price: 0,
            age_group: '',
            publisher: 'Harper',
            primary_isbn13: '9780062834836',
            primary_isbn10: '0062834835'
          }
        ]
      }
    };

    it('renders Book component without anyout an any error', () => {
      shallow(<Book {...props}/>);
    });

    it('matches snapshot', () => {
      const wrapper = mount(<Book {...props}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    describe('checking Boook component closely', () => {
      let component = null;

      beforeEach(() => {
        component = mount(<Book {...props} />);
      });

      it('renders the book cover correctly', () => {
        expect(component.find('object').length).toBe(1);
        expect(component.find('img').length).toBe(1);
        expect(component.find('object').getElement().props.data).toEqual('https://s1.nyt.com/du/books/images/9780062834836.jpg');
        expect(component.find('img').getElement().props.src).toEqual('https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png');
      });

      it('renders the book title correctly', () => {
        expect(component.find('h5.mt-1').length).toBe(1);
        expect(component.find('h5.mt-1').text()).toEqual(props.book.book_details[0].title);
      });

      it('renders the book description correctly', () => {
        expect(component.find('p').length).toBe(1);
        expect(component.find('p').text()).toEqual(props.book.book_details[0].description);
      });
    });
  });
});
