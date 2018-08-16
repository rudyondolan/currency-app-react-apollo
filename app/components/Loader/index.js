/**
 *
 * Loader
 *
 */

import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ExchangeLoader() {
  return (
    <Dimmer active inverted>
      <Loader size="large">
        <FormattedMessage {...messages.loading} />
      </Loader>
    </Dimmer>
  );
}

ExchangeLoader.propTypes = {};

export default ExchangeLoader;
