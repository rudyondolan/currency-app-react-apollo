import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Container, Image, Input, Select } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { debounce } from 'lodash';

import Logo from 'assets/logo.png';
import messages from './messages';
import options from './data.json';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { inputText: '' }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.debouncedInput = debounce(this.handleInputChange, 500);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return { inputText: props.amount };
  }

  debouncedInput() {
    const { onSetAmount } = this.props;
    const { inputText } = this.state;

    return onSetAmount(inputText)
  }

  handleInputChange(e) {
    this.setState(() => ({ inputText: e.target.value }))
    this.debouncedInput();
  }

  handleSelectChange(e, data) {
    const { onSetBase } = this.props;
    e.preventDefault();
    onSetBase(data.value);
  }

  render() {
    console.log(this.state);
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
