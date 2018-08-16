/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Header } from 'semantic-ui-react';
import messages from './messages';

export default function NotFound() {
  return (
    <Container text textAlign="center" style={{ marginTop: '7em' }}>
      <Header as="h2">
        <FormattedMessage {...messages.page} />
      </Header>
    </Container>
  );
}
