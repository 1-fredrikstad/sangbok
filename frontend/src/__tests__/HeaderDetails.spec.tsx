import React from 'react';
import { shallow } from 'enzyme';
import HeaderDetails from '../components/molecules/HeaderDetails';

describe('HeaderDetails', () => {
  const wrapper = shallow(
    <HeaderDetails
      title={'Østfoldsangen'}
      author={'Ola Nordmann'}
      melody={'Min melodi'}
      category={'Bålsanger'}
      audioUrl={''}
      spotifyuri={'spotify:track:3AJwUDP919kvQ9QcozQPxg'}
      order={1}
    />
  );

  it('should render without throwing an error', () => {
    expect(wrapper).toHaveLength(1);
  });
});
