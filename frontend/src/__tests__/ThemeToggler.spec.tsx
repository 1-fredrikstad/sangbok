import React from 'react';
import { shallow } from 'enzyme';
import ThemeToggler from '../components/atoms/ThemeToggler';

describe('Pages', () => {
  const wrapper = shallow(<ThemeToggler />);

  it('should render without throwing an error', () => {
    expect(wrapper).toHaveLength(1);
  });
});
