import React from 'react';
import { FormattedNumber } from 'react-intl';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { find, omit, isEqual } from 'lodash';

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  &&&&&& {
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
    background-color: #d0d0d0 !important;
    &:hover {
      background-color: red !important;
    }
  }
`;

class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const {
      onClose,
      currencyData: { id },
      totalCurrency,
      onToggleForm,
      onToggleButton,
      onResetCurrency,
      isDisplayForm,
    } = this.props;

    if (totalCurrency <= 1) {
      if (!isDisplayForm) {
        onToggleForm();
        onToggleButton();
      }
      onResetCurrency();
    }

    onClose(id);
  }

  determineAmount(amount) {
    const {
      data: { rates },
      currencyData: {
        data: { convertedCurrency },
      },
    } = this.props;

    const findData = find(rates, (value, key) => key === convertedCurrency);
    const extractData = omit(findData, ['__typename']);
    const { amount: originAmount } = extractData;

    if (!isEqual(amount, originAmount)) {
      return originAmount;
    }

    return amount;
  }

  determineBase(base) {
    const {
      data: { rates },
      currencyData: {
        data: { convertedCurrency },
      },
    } = this.props;

    const findData = find(rates, (value, key) => key === convertedCurrency);
    const extractData = omit(findData, ['__typename']);
    const { base: originBase } = extractData;

    if (!isEqual(base, originBase)) {
      return originBase;
    }

    return base;
  }

  determineCurrency(currency) {
    const {
      data: { base: originCurrency },
    } = this.props;
    if (!isEqual(currency, originCurrency)) {
      return originCurrency;
    }

    return currency;
  }

  renderConvertedCurrency(convertedCurrency) {
    return <Header as="h3">{convertedCurrency}</Header>;
  }

  renderAmount(amount) {
    const currencyAmount = this.determineAmount(amount);
    return (
      <Header as="h3">
        <FormattedNumber value={currencyAmount} minimumFractionDigits={2} />
      </Header>
    );
  }

  renderText(text) {
    return <Header as="h4">{text}</Header>;
  }

  renderBase(currency, convertedCurrency, base) {
    const currencyCode = this.determineCurrency(currency);
    const currencyBase = this.determineBase(base);

    return (
      <Header as="h5">
        <i>
          {`1 ${currencyCode} = ${convertedCurrency} `}
          <FormattedNumber value={currencyBase} minimumFractionDigits={2} />
        </i>
      </Header>
    );
  }

  render() {
    const {
      loading,
      currencyData: {
        currency,
        data: { convertedCurrency, amount, text, base },
      },
    } = this.props;

    return (
      <Segment loading={loading}>
        <IconWrapper>
          <StyledIcon
            size="small"
            onClick={this.handleClose}
            circular
            name="close"
            inverted
          />
        </IconWrapper>
        <Grid columns={2} celled style={{ marginBottom: '0px' }}>
          <Grid.Row>
            <Grid.Column>
              {!loading && this.renderConvertedCurrency(convertedCurrency)}
            </Grid.Column>
            <Grid.Column>{!loading && this.renderAmount(amount)}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{!loading && this.renderText(text)}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {!loading && this.renderBase(currency, convertedCurrency, base)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

Item.propTypes = {
  totalCurrency: PropTypes.number,
  currencyData: PropTypes.object,
  loading: PropTypes.bool,
  data: PropTypes.object,
  isDisplayForm: PropTypes.bool,
  onClose: PropTypes.func,
  onToggleForm: PropTypes.func,
  onToggleButton: PropTypes.func,
  onResetCurrency: PropTypes.func,
};

export default Item;
