import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { mountWithIntl } from 'helper/test';
import Form from '../index';

describe('<Form />', () => {
  test('should match the snapshot', () => {
    const wrapper = renderForm();
    expect(wrapper).toMatchSnapshot();
  });

  test('should call change event on dropdown', () => {
    const onChange = jest.fn();
    const props = { onChange };
    const wrapper = renderForm(props);
    wrapper.find(Dropdown).simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should call click event on button', () => {
    const onClick = jest.fn();
    const props = { onClick };
    const wrapper = renderForm(props);
    wrapper.find(Button).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

function renderForm(props = {}) {
  const propsToUse = {
    onChange() {},
    onClick() {},
    ...props,
  };

  return mountWithIntl(<Form {...propsToUse} />);
}
