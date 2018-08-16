/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import AboutPage from 'containers/AboutPage/Loadable';
import ExchangePage from 'containers/ExchangePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { makeSelectAmount, makeSelectBase } from './selectors';
import { setAmount, setBase } from './actions';

function App(props) {
  const { onSetAmount, onSetBase, base, amount } = props;
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header
        amount={amount}
        base={base}
        onSetAmount={onSetAmount}
        onSetBase={onSetBase}
      />
      <Switch>
        <Route exact path="/" component={ExchangePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  base: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSetAmount: PropTypes.func,
  onSetBase: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSetAmount: amount => dispatch(setAmount(amount)),
    onSetBase: base => dispatch(setBase(base)),
  };
}

const mapStateToProps = createStructuredSelector({
  amount: makeSelectAmount(),
  base: makeSelectBase(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(App);
