import React from 'react';
import { mount } from 'enzyme';
import { Button, Header } from 'semantic-ui-react';
import AboutPage from '../index';

describe('<AboutPage />', () => {
  test('should render Button correctly', () => {
    const wrapper = renderAboutPage();
    expect(wrapper.find(Button).length).toBe(4);
  });

  test('should render Header correctly', () => {
    const wrapper = renderAboutPage();
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Header).text()).toBe('Author');
  });

  test('should trigger click event on button', () => {
    const wrapper = renderAboutPage();
    wrapper
      .find(Button)
      .at(0)
      .simulate('click');
  });
});

function renderAboutPage() {
  return mount(<AboutPage />);
}
