/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SET_AMOUNT, SET_BASE } from './constants';

/**
 * Set amount currency action
 * @param {number} amount List of numbers that will be used for input
 */
export function setAmount(amount) {
  return {
    type: SET_AMOUNT,
    amount,
  };
}

/**
 * Set base currency action
 * @param {string} base A string currency code in 3 digits
 */
export function setBase(base) {
  return {
    type: SET_BASE,
    base,
  };
}
