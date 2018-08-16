import { fromJS } from 'immutable';

import {
  makeSelectCurrencies,
  makeSelectToggleButton,
  makeSelectToggleForm,
} from '../selectors';

describe('makeSelectCurrencies', () => {
  const currentCurrencies = makeSelectCurrencies();
  test('should select the current currencies', () => {
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
    const currencies = fromJS([currency]);
    const mockedState = fromJS({
      exchangePage: {
        currencies,
      },
    });
    expect(currentCurrencies(mockedState)).toEqual([currency]);
  });
});

describe('makeSelectToggleButton', () => {
  const currentToggleButton = makeSelectToggleButton();
  test('should select the current toggle button', () => {
    const currentIsDisplayButton = false;
    const mockedState = fromJS({
      exchangePage: {
        isDisplayButton: currentIsDisplayButton,
      },
    });
    expect(currentToggleButton(mockedState)).toEqual(currentIsDisplayButton);
  });
});

describe('makeSelectToggleForm', () => {
  const currentToggleForm = makeSelectToggleForm();
  test('should select the current toggle form', () => {
    const currentIsDisplayForm = true;
    const mockedState = fromJS({
      exchangePage: {
        isDisplayForm: currentIsDisplayForm,
      },
    });
    expect(currentToggleForm(mockedState)).toEqual(currentIsDisplayForm);
  });
});
