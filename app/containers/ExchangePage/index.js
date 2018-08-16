/**
 *
 * ExchangePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectBase, makeSelectAmount } from 'containers/App/selectors';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import uuid from 'uuid/v4';
import { map, find, omit } from 'lodash';

import Item from 'components/Item';
import Button from 'components/Button';
import Form from 'components/Form';
import injectReducer from 'utils/injectReducer';
import { toFloat } from 'helper/util';
import {
  makeSelectCurrencies,
  makeSelectToggleButton,
  makeSelectToggleForm,
} from './selectors';
import {
  addCurrency,
  deleteCurrency,
  toggleButton,
  toggleForm,
} from './actions';
import reducer from './reducer';
import ExchangeQuery from './graphql/query.graphql';

const ExchangePageWrapper = styled.div`
  position: relative;
`;

@graphql(ExchangeQuery, {
  options: ({ base, amount }) => ({
    variables: {
      base,
      amount: toFloat(amount),
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  }),
})
class ExchangePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedCurrency: '' };
    this.handleSelectCurrency = this.handleSelectCurrency.bind(this);
    this.handleResetCurrency = this.handleResetCurrency.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
  }

  handleSelectCurrency(selectedCurrency) {
    this.setState(() => ({ selectedCurrency }));
  }

  handleResetCurrency() {
    this.setState(() => ({ selectedCurrency: '' }));
  }

  handleSubmitButton() {
    const {
      currencies,
      data,
      data: { loading },
      onAddCurrency,
      onToggleButton,
      onToggleForm,
    } = this.props;
    const { selectedCurrency } = this.state;

    if (!loading && selectedCurrency !== '') {
      onToggleForm();
      onToggleButton();
      const findData = find(
        data.exchange.rates,
        (rate, key) => key === selectedCurrency,
      );

      if (findData) {
        const omitData = omit(findData, ['__typename']);
        const newData = Object.assign(
          {},
          {
            id:
              currencies.reduce((maxId, curr) => Math.max(curr.id, maxId), -1) +
              1,
            currency: data.exchange.base,
            data: {
              convertedCurrency: selectedCurrency,
              ...omitData,
            },
          },
        );

        onAddCurrency(newData);
      }
    }
  }

  handleAddButton() {
    const { onToggleButton, onToggleForm } = this.props;

    this.handleResetCurrency();
    onToggleForm();
    onToggleButton();
  }

  renderItem(currencies) {
    const {
      data,
      isDisplayForm,
      data: { loading },
      onToggleButton,
      onToggleForm,
      onDeleteCurrency,
    } = this.props;

    return map(currencies, currency => (
      <Item
        key={uuid()}
        loading={loading}
        isDisplayForm={isDisplayForm}
        currencyData={currency}
        totalCurrency={currencies.length}
        data={data.exchange}
        onResetCurrency={this.handleResetCurrency}
        onToggleForm={onToggleForm}
        onToggleButton={onToggleButton}
        onClose={onDeleteCurrency}
      />
    ));
  }

  render() {
    const { isDisplayButton, isDisplayForm, currencies } = this.props;

    return (
      <ExchangePageWrapper>
        <Helmet>
          <title>List Exchange</title>
          <meta name="description" content="Description of ExchangePage" />
        </Helmet>
        <Container text style={{ marginTop: '7em' }}>
          {this.renderItem(currencies)}
          {isDisplayButton && (
            <Button
              fluid
              size="large"
              color="teal"
              onClick={this.handleAddButton}
            />
          )}
          {isDisplayForm && (
            <Form
              onChange={this.handleSelectCurrency}
              onClick={this.handleSubmitButton}
            />
          )}
        </Container>
      </ExchangePageWrapper>
    );
  }
}

ExchangePage.propTypes = {
  data: PropTypes.object,
  currencies: PropTypes.array,
  isDisplayButton: PropTypes.bool,
  isDisplayForm: PropTypes.bool,
  onAddCurrency: PropTypes.func,
  onDeleteCurrency: PropTypes.func,
  onToggleButton: PropTypes.func,
  onToggleForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  base: makeSelectBase(),
  amount: makeSelectAmount(),
  currencies: makeSelectCurrencies(),
  isDisplayButton: makeSelectToggleButton(),
  isDisplayForm: makeSelectToggleForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddCurrency: currency => dispatch(addCurrency(currency)),
    onDeleteCurrency: key => dispatch(deleteCurrency(key)),
    onToggleButton: () => dispatch(toggleButton()),
    onToggleForm: () => dispatch(toggleForm()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'exchangePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(ExchangePage);
