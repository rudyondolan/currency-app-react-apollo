/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider, FormattedMessage } from 'react-intl';
import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  test('should render the Page Not Found text', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NotFoundPage />
      </IntlProvider>,
    );

    expect(
      renderedComponent.contains(
        <FormattedMessage
          id="boilerplate.containers.NotFoundPage.page"
          defaultMessage="Page not found."
        />,
      ),
    ).toEqual(true);
  });
});
