import React from 'react';
import { shallowWithIntl } from 'helper/test';
import Header from '../index';

describe('<Header />', () => {
  test('should match the snapshot', () => {
    const wrapper = renderHeader();
    expect(wrapper).toMatchSnapshot();
  });

  // test('should call change event on input', () => {
  //   const onSetAmount = jest.fn();
  //   const props = { onSetAmount };
  //   const wrapper = renderHeader(props);
  //   wrapper.find('input').simulate('change');
  // });
});

function renderHeader(props = {}) {
  const propsToUse = {
    base: 'USD',
    amount: 1,
    onSetBase() {},
    onSetAmount() {},
    ...props,
  };

  return shallowWithIntl(<Header {...propsToUse} />);
}
