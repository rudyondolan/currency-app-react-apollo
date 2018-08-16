/*
 *
 * ExchangePage actions
 *
 */

import {
  ADD_CURRENCY,
  DELETE_CURRENCY,
  TOGGLE_BUTTON,
  TOGGLE_FORM,
} from './constants';

/**
 * Add currency action
 * @param {object} currency An object that will be pushed on reducer
 */
export function addCurrency(currency) {
  return {
    type: ADD_CURRENCY,
    currency,
  };
}

/**
 * Delete currency action
 * @param {number} id A unique id from each item
 */
export function deleteCurrency(id) {
  return {
    type: DELETE_CURRENCY,
    id,
  };
}

/**
 * Toggle button action
 */
export function toggleButton() {
  return {
    type: TOGGLE_BUTTON,
  };
}

/**
 * Toggle form action
 */
export function toggleForm() {
  return {
    type: TOGGLE_FORM,
  };
}
