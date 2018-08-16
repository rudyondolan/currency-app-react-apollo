import React from 'react';
import { Button as ButtonSemantic } from 'semantic-ui-react';
import { mountWithIntl } from 'helper/test';
import Button from '../index';
import messages from '../messages';

describe('<Button />', () => {
  test('should match the snapshot', () => {
    const wrapper = renderButton();
    expect(wrapper).toMatchSnapshot();
  });

  test('should match text button with the messages', () => {
    const wrapper = renderButton();
    expect(wrapper.find(ButtonSemantic).text()).toBe(
      messages.add.defaultMessage,
    );
  });

  test('should call click event', () => {
    const onClick = jest.fn();
    const props = { onClick };
    const wrapper = renderButton(props);
    wrapper.find(ButtonSemantic).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

function renderButton(props = {}) {
  const propsToUse = {
    size: 'large',
    color: 'teal',
    onClick() {},
    ...props,
  };

  return mountWithIntl(<Button {...propsToUse} />);
}
