import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Container, Image, Input, Select } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import Logo from 'assets/logo.png';
import messages from './messages';

const options = [
  { key: 'AUD', text: 'AUD', value: 'AUD' },
  { key: 'BGN', text: 'BGN', value: 'BGN' },
  { key: 'BRL', text: 'BRL', value: 'BRL' },
  { key: 'CAD', text: 'CAD', value: 'CAD' },
  { key: 'CHF', text: 'CHF', value: 'CHF' },
  { key: 'CNY', text: 'CNY', value: 'CNY' },
  { key: 'CZK', text: 'CZK', value: 'CZK' },
  { key: 'DKK', text: 'DKK', value: 'DKK' },
  { key: 'GBP', text: 'GBP', value: 'GBP' },
  { key: 'HKD', text: 'HKD', value: 'HKD' },
  { key: 'HRK', text: 'HRK', value: 'HRK' },
  { key: 'HUF', text: 'HUF', value: 'HUF' },
  { key: 'IDR', text: 'IDR', value: 'IDR' },
  { key: 'ILS', text: 'ILS', value: 'ILS' },
  { key: 'INR', text: 'INR', value: 'INR' },
  { key: 'ISK', text: 'ISK', value: 'ISK' },
  { key: 'JPY', text: 'JPY', value: 'JPY' },
  { key: 'KRW', text: 'KRW', value: 'KRW' },
  { key: 'MXN', text: 'MXN', value: 'MXN' },
  { key: 'MYR', text: 'MYR', value: 'MYR' },
  { key: 'NOK', text: 'NOK', value: 'NOK' },
  { key: 'NZD', text: 'NZD', value: 'NZD' },
  { key: 'PHP', text: 'PHP', value: 'PHP' },
  { key: 'PLN', text: 'PLN', value: 'PLN' },
  { key: 'RON', text: 'RON', value: 'RON' },
  { key: 'RUB', text: 'RUB', value: 'RUB' },
  { key: 'SEK', text: 'SEK', value: 'SEK' },
  { key: 'SGD', text: 'SGD', value: 'SGD' },
  { key: 'THB', text: 'THB', value: 'THB' },
  { key: 'TRY', text: 'TRY', value: 'TRY' },
  { key: 'USD', text: 'USD', value: 'USD' },
  { key: 'ZAR', text: 'ZAR', value: 'ZAR' },
];

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleInputChange(e) {
    const { onSetAmount } = this.props;
    const { value } = e.target;
    e.preventDefault();
    onSetAmount(value);
  }

  handleSelectChange(e, data) {
    const { onSetBase } = this.props;
    e.preventDefault();
    onSetBase(data.value);
  }

  render() {
    const { base, amount } = this.props;

    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src={Logo} style={{ marginRight: '1.5em' }} />
            Fereign Exchange Currency
          </Menu.Item>
          <Link className="item" to="/">
            <FormattedMessage {...messages.list} />
          </Link>
          <Link className="item" to="/about">
            <FormattedMessage {...messages.about} />
          </Link>
          <Menu.Item position="right">
            <Input type="text" placeholder="Amount..." action>
              <input
                type="number"
                value={amount}
                onChange={this.handleInputChange}
              />
              <Select
                compact
                options={options}
                defaultValue={base}
                onChange={this.handleSelectChange}
              />
            </Input>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

Header.propTypes = {
  base: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSetBase: PropTypes.func.isRequired,
  onSetAmount: PropTypes.func.isRequired,
};

export default Header;
