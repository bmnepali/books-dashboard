import * as React from 'react';

// Load Component
import Sidebar from '../../components/Sidebar';

describe('Sidebar Component', () => {
  describe('rendering testing', () => {
    it('renders Sidebar component without any error', () => {
      shallow(<Sidebar />);
    });

    it('matches snapshot', () => {
      const wrapper = shallow(<Sidebar />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
