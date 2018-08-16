/*
 *
 * ExchangePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_CURRENCY,
  DELETE_CURRENCY,
  TOGGLE_BUTTON,
  TOGGLE_FORM,
} from './constants';

export const initialState = fromJS({
  currencies: [],
  isDisplayForm: true,
  isDisplayButton: false,
});

function exchangePageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CURRENCY:
      return state.set(
        'currencies',
        state.get('currencies').push(action.currency),
      );
    case DELETE_CURRENCY:
      return state.set(
        'currencies',
        state.get('currencies').filter(cur => cur.id !== action.id),
      );
    case TOGGLE_BUTTON:
      return state.set('isDisplayButton', !state.get('isDisplayButton'));
    case TOGGLE_FORM:
      return state.set('isDisplayForm', !state.get('isDisplayForm'));
    default:
      return state;
  }
}

export default exchangePageReducer;
