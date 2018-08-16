import { SET_AMOUNT, SET_BASE } from '../constants';
import { setAmount, setBase } from '../actions';

describe('App Actions', () => {
  describe('setAmount', () => {
    test('should return the correct type and amount', () => {
      const amount = 1;
      const expectedResult = {
        type: SET_AMOUNT,
        amount,
      };

      expect(setAmount(amount)).toEqual(expectedResult);
    });
  });

  describe('setBase', () => {
    test('should return the correct type and base name', () => {
      const base = 'USD';
      const expectedResult = {
        type: SET_BASE,
        base,
      };

      expect(setBase(base)).toEqual(expectedResult);
    });
  });
});
