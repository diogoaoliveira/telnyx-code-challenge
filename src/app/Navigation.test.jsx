import React from 'react';
import { shallow, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

configure({ adapter: new Adapter() })

describe('<Navigation />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should navbar class in the nav tag', () => {
    expect(wrapper.find('.navbar')).toHaveLength(1);
  });

  it('should have 3 NavLinks Component', () => {
    expect(wrapper.find(NavLink)).toHaveLength(3);
  });

  it('should contain 1 NavLink Component with direction for the blog page', () => {
    let componentToCheck = <NavLink to={`/blog`} className='nav-link' activeClassName='active'>Blog</NavLink>;
    expect(wrapper.contains(componentToCheck)).toEqual(true);
  });
});
