import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Select } from 'semantic-ui-react';

import { mountWithIntl } from 'helper/test';
import Header from '../index';

describe('<Header />', () => {
  test('should call change event on input', () => {
    const onSetAmount = jest.fn();
    const props = { onSetAmount };
    const wrapper = renderHeader(props);
    wrapper.find('input').simulate('change');
  });

  test('should call change event on select', () => {
    const onSetBase = jest.fn();
    const props = { onSetBase };
    const wrapper = renderHeader(props);
    wrapper.find(Select).simulate('change');
  });
});

function renderHeader(props = {}) {
  const propsToUse = {
    base: 'USD',
    amount: 1,
    onSetBase() {},
    onSetAmount() {},
    ...props,
  };

  return mountWithIntl(
    <MemoryRouter>
      <Header {...propsToUse} />
    </MemoryRouter>,
  );
}
