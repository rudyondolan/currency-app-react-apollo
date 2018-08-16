import { fromJS } from 'immutable';
import appReducer from '../reducer';
import { setAmount, setBase } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      amount: 1,
      base: 'USD',
    });
  });

  test('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  test('should handle the setAmount action correctly', () => {
    const amount = 1000;
    const expectedResult = state.set('amount', amount);
    expect(appReducer(state, setAmount(amount))).toEqual(expectedResult);
  });

  test('should handle the setBase action correctly', () => {
    const base = 'IDR';
    const expectedResult = state.set('base', base);
    expect(appReducer(state, setBase(base))).toEqual(expectedResult);
  });
});
