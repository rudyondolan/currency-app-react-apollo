import React from 'react';
import { Icon } from 'semantic-ui-react';
import { mountWithIntl } from 'helper/test';
import Item from '../index';

describe('<Item />', () => {
  test('should match the snapshot', () => {
    const wrapper = renderItem();
    expect(wrapper).toMatchSnapshot('before update');

    const props = {
      data: {
        base: 'USD',
        date: '2018-07-20',
        rates: {
          AUD: {
            amount: 13.554413025,
            base: 1.3554413025,
            text: 'Australia Dollar',
          },
        },
      },
    };

    wrapper.setProps(props);
    expect(wrapper).toMatchSnapshot('after update');
  });

  test('should call click event when close the item', () => {
    const onClose = jest.fn();
    const props = { onClose };
    const wrapper = renderItem(props);
    wrapper.find(Icon).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

function renderItem(props = {}) {
  const propsToUse = {
    totalCurrency: 1,
    currencyData: {
      id: 0,
      currency: 'USD',
      data: {
        amount: 1.3554413025,
        base: 1.3554413025,
        convertedCurrency: 'AUD',
        text: 'Australia Dollar',
      },
    },
    loading: false,
    isDisplayForm: false,
    data: {},
    onClose() {},
    onToggleForm() {},
    onToggleButton() {},
    onResetCurrency() {},
    ...props,
  };

  return mountWithIntl(<Item {...propsToUse} />);
}
