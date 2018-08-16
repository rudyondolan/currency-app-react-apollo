import React from 'react';
import { shallowWithIntl } from 'helper/test';
import App from '../index';

describe('<App />', () => {
  test('should match with the snapshot', () => {
    const wrapper = shallowWithIntl(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
