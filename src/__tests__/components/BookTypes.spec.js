import * as React from 'react';

// Load Component
import BookTypes from '../../components/BookTypes';

describe('BookTypes Component', () => {
  describe('rendering testing', () => {
    it('renders BookTypes component without any error', () => {
      shallow(<BookTypes />);
    });

    it('matches snapshot', () => {
      const wrapper = shallow(<BookTypes />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
