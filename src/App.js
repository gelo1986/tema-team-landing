import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router';
import { compose, getContext, withProps } from 'recompose';
import * as screens from 'screens';
import { SideBar } from 'components';

import './style.scss';

const App = ({ pathname }) => (
	<div className="app-layout">
		<SideBar path={pathname} />
    <Switch>
      <Route path="/about" component={screens.HomeScreen} />
			<Route path="/archive" component={() => <div>Archive</div>} />
			<Route path="/" component={() => <Redirect from="/" to="/about" />} />
    </Switch>
	</div>
);

App.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default compose(
	getContext({
		router: PropTypes.object,
	}),
	withProps(({ router }) => ({
		pathname: router.route.location.pathname,
	})),
)(App);
