import { fromJS } from 'immutable';
import exchangePageReducer from '../reducer';
import {
  addCurrency,
  deleteCurrency,
  toggleButton,
  toggleForm,
} from '../actions';

describe('exchangePageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      currencies: [],
      isDisplayForm: true,
      isDisplayButton: false,
    });
  });

  test('should return the initial state', () => {
    const expectedResult = state;
    expect(exchangePageReducer(undefined, {})).toEqual(expectedResult);
  });

  test('should handle the addCurrency action correctly', () => {
    const currency = {
      id: 0,
      currency: 'USD',
      data: {
        amount: 1.3554413025,
        base: 1.3554413025,
        convertedCurrency: 'AUD',
        text: 'Australia Dollar',
      },
    };
    const expectedResult = state.set(
      'currencies',
      state.get('currencies').push(currency),
    );
    expect(exchangePageReducer(state, addCurrency(currency))).toEqual(
      expectedResult,
    );
  });

  test('should handle the deleteCurrency action correctly', () => {
    const currency = [
      {
        id: 0,
        currency: 'USD',
        data: {
          amount: 1.3554413025,
          base: 1.3554413025,
          convertedCurrency: 'AUD',
          text: 'Australia Dollar',
        },
      },
      {
        id: 1,
        currency: 'USD',
        data: {
          amount: 1.3554413025,
          base: 1.3554413025,
          convertedCurrency: 'AUD',
          text: 'Australia Dollar',
        },
      },
    ];

    state.set('currencies', state.get('currencies').push(...currency));
    const expectedResult = state.set(
      'currencies',
      state.get('currencies').pop(0),
    );
    expect(exchangePageReducer(state, deleteCurrency(0))).toEqual(
      expectedResult,
    );
  });

  test('should handle the toggleButton action correctly', () => {
    const expectedResult = state.set(
      'isDisplayButton',
      !state.get('isDisplayButton'),
    );
    expect(exchangePageReducer(state, toggleButton())).toEqual(expectedResult);
  });

  test('should handle the toggleForm action correctly', () => {
    const expectedResult = state.set(
      'isDisplayForm',
      !state.get('isDisplayForm'),
    );
    expect(exchangePageReducer(state, toggleForm())).toEqual(expectedResult);
  });
});
