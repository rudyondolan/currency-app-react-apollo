/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectAmount = () =>
  createSelector(selectGlobal, globalState => globalState.get('amount'));

const makeSelectBase = () =>
  createSelector(selectGlobal, globalState => globalState.get('base'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export { selectGlobal, makeSelectBase, makeSelectAmount, makeSelectLocation };
