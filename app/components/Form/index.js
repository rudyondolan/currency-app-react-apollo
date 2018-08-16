import React from 'react';
import { Dropdown, Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import messages from './messages';

const countryOptions = [
  { key: 'AUD', value: 'AUD', text: 'AUD', flag: 'au' },
  { key: 'BGN', value: 'BGN', text: 'BGN', flag: 'bg' },
  { key: 'BRL', value: 'BRL', text: 'BRL', flag: 'br' },
  { key: 'CAD', value: 'CAD', text: 'CAD', flag: 'ca' },
  { key: 'CHF', value: 'CHF', text: 'CHF', flag: 'ch' },
  { key: 'CNY', value: 'CNY', text: 'CNY', flag: 'cn' },
  { key: 'CZK', value: 'CZK', text: 'CZK', flag: 'cz' },
  { key: 'DKK', value: 'DKK', text: 'DKK', flag: 'dk' },
  { key: 'GBP', value: 'GBP', text: 'GBP', flag: 'gb' },
  { key: 'HKD', value: 'HKD', text: 'HKD', flag: 'hk' },
  { key: 'HRK', value: 'HRK', text: 'HRK', flag: 'hr' },
  { key: 'HUF', value: 'HUF', text: 'HUF', flag: 'hu' },
  { key: 'IDR', value: 'IDR', text: 'IDR', flag: 'id' },
  { key: 'ILS', value: 'ILS', text: 'ILS', flag: 'il' },
  { key: 'INR', value: 'INR', text: 'INR', flag: 'in' },
  { key: 'ISK', value: 'ISK', text: 'ISK', flag: 'is' },
  { key: 'JPY', value: 'JPY', text: 'JPY', flag: 'jp' },
  { key: 'KRW', value: 'KRW', text: 'KRW', flag: 'kr' },
  { key: 'MXN', value: 'MXN', text: 'MXN', flag: 'mx' },
  { key: 'MYR', value: 'MYR', text: 'MYR', flag: 'my' },
  { key: 'NOK', value: 'NOK', text: 'NOK', flag: 'no' },
  { key: 'NZD', value: 'NZD', text: 'NZD', flag: 'nz' },
  { key: 'PHP', value: 'PHP', text: 'PHP', flag: 'ph' },
  { key: 'PLN', value: 'PLN', text: 'PLN', flag: 'pl' },
  { key: 'RON', value: 'RON', text: 'RON', flag: 'ro' },
  { key: 'RUB', value: 'RUB', text: 'RUB', flag: 'ru' },
  { key: 'SEK', value: 'SEK', text: 'SEK', flag: 'se' },
  { key: 'SGD', value: 'SGD', text: 'SGD', flag: 'sg' },
  { key: 'THB', value: 'THB', text: 'THB', flag: 'th' },
  { key: 'TRY', value: 'TRY', text: 'TRY', flag: 'tr' },
  { key: 'USD', value: 'USD', text: 'USD', flag: 'us' },
  { key: 'ZAR', value: 'ZAR', text: 'ZAR', flag: 'za' },
];

function Form({ onChange, onClick }) {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width="13">
            <Dropdown
              placeholder="Select Currency"
              fluid
              search
              selection
              options={countryOptions}
              onChange={(e, data) => onChange(data.value)}
            />
          </Grid.Column>
          <Grid.Column width="3">
            <Button onClick={() => onClick()} fluid size="medium" color="teal">
              <FormattedMessage {...messages.submit} />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

Form.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default Form;
