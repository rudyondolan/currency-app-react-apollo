import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ExchangeButton({ onClick, ...rest }) {
  return (
    <Button {...rest} onClick={() => onClick()}>
      <FormattedMessage {...messages.add} />
    </Button>
  );
}

ExchangeButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ExchangeButton;
