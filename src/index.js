import 'babel-polyfill'; // eslint-disable-line
import { AppContainer } from 'react-hot-loader';  // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import './assets/main.scss';

const history = createHistory();

const render = Component =>
  ReactDOM.render(
    <AppContainer>
				<Router history={history}>
          <Component />
        </Router>
    </AppContainer>,
    document.getElementById('root'),
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
