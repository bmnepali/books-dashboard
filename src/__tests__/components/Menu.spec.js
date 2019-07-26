import * as React from 'react';

// Load Component
import Menu from '../../components/Menu';

describe('Menu Component', () => {
  describe('rendering testing', () => {
    it('renders Menu component without any error', () => {
      shallow(<Menu />);
    });

    it('matches snapshot', () => {
      const wrapper = shallow(<Menu />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
