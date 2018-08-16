import React from 'react';
import { mountWithIntl } from 'helper/test';
import { Loader as LoaderSemantic } from 'semantic-ui-react';
import Loader from '../index';
import messages from '../messages';

describe('<Loader />', () => {
  test('should match the snapshot', () => {
    const wrapper = renderLoader();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render text loading correctly', () => {
    const wrapper = renderLoader();
    expect(wrapper.find(LoaderSemantic).text()).toBe(
      messages.loading.defaultMessage,
    );
  });
});

function renderLoader(props = {}) {
  return mountWithIntl(<Loader {...props} />);
}
