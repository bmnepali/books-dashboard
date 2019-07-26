import * as React from 'react';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
  it('renders the component without any error', () => {
    shallow(<Navbar />);
  });

  it('matches the snapshot', () => {
    expect(toJson(shallow(<Navbar />))).toMatchSnapshot();
  });

  describe('checking navbar component closely', () => {
    let component = null;

    beforeEach(() => {
      component = mount(<Navbar />);
    });

    it('renders the logo correctly', () => {
      expect(component.find('.logo').length).toBe(1);
      expect(component.find('.logo').getElement().props.src).toEqual('../assets/images/logo.png');
    });

    it('renders the user avatar correctly', () => {
      expect(component.find('.align-self-center').length).toBe(1);
      expect(component.find('.align-self-center').getElement().props.src).toEqual('../assets/images/user.png');
    });

    it('renders search books from correctly', () => {
      expect(component.find('.search-books').length).toBe(1);
      expect(component.find('input').getElement().props.placeholder).toEqual('Search');
      expect(component.find('button').getElement().props.type).toEqual('submit');
    });
  });
});

