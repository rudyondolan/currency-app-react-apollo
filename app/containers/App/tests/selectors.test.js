import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectAmount,
  makeSelectBase,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectAmount', () => {
  const currentAmount = makeSelectAmount();
  test('should select the current amount', () => {
    const amount = 1;
    const mockedState = fromJS({
      global: {
        amount,
      },
    });
    expect(currentAmount(mockedState)).toEqual(amount);
  });
});

describe('makeSelectBase', () => {
  const currentBase = makeSelectBase();
  test('should select the current base', () => {
    const base = 'USD';
    const mockedState = fromJS({
      global: {
        base,
      },
    });
    expect(currentBase(mockedState)).toEqual(base);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  test('should select the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(
      route.get('location').toJS(),
    );
  });
});
