import {
  ADD_CURRENCY,
  DELETE_CURRENCY,
  TOGGLE_BUTTON,
  TOGGLE_FORM,
} from '../constants';
import {
  addCurrency,
  deleteCurrency,
  toggleButton,
  toggleForm,
} from '../actions';

describe('Exchange Actions', () => {
  describe('addCurrency', () => {
    test('should return the correct type and currency', () => {
      const currency = {
        id: 0,
        currency: 'USD',
        data: {
          amount: 1,
          base: 1,
          convertedCurrency: 'AUD',
          text: 'Australia Dollar',
        },
      };
      const expectedResult = {
        type: ADD_CURRENCY,
        currency,
      };

      expect(addCurrency(currency)).toEqual(expectedResult);
    });
  });

  describe('deleteCurrency', () => {
    test('should return the correct type and id', () => {
      const id = 0;
      const expectedResult = {
        type: DELETE_CURRENCY,
        id,
      };

      expect(deleteCurrency(id)).toEqual(expectedResult);
    });
  });

  describe('toggleButton', () => {
    test('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_BUTTON,
      };

      expect(toggleButton()).toEqual(expectedResult);
    });
  });

  describe('toggleForm', () => {
    test('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_FORM,
      };

      expect(toggleForm()).toEqual(expectedResult);
    });
  });
});
