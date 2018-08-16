import { createSelector } from 'reselect';

/**
 * Direct selector to the exchangePage state domain
 */

const selectExchangePage = state => state.get('exchangePage');

const makeSelectCurrencies = () =>
  createSelector(selectExchangePage, exchangePageState =>
    exchangePageState.get('currencies').toJS(),
  );

const makeSelectToggleButton = () =>
  createSelector(selectExchangePage, exchangePageState =>
    exchangePageState.get('isDisplayButton'),
  );

const makeSelectToggleForm = () =>
  createSelector(selectExchangePage, exchangePageState =>
    exchangePageState.get('isDisplayForm'),
  );

export { makeSelectCurrencies, makeSelectToggleButton, makeSelectToggleForm };
