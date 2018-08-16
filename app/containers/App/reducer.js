/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { SET_AMOUNT, SET_BASE } from './constants';

// The initial state of the App
const initialState = fromJS({
  base: 'USD',
  amount: 1,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AMOUNT:
      return state.set('amount', action.amount);
    case SET_BASE:
      return state.set('base', action.base);
    default:
      return state;
  }
}

export default appReducer;
