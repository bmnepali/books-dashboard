import * as React from 'react';

// Load Component
import ContentHeader from '../../components/ContentHeader';

describe('ContentHeader Component', () => {
  describe('rendering testing', () => {
    it('renders ContentHeader component without any error', () => {
      shallow(<ContentHeader />);
    });

    it('matches snapshot', () => {
      const wrapper = shallow(<ContentHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
