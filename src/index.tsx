declare global {
  namespace NodeJS {
    interface Global {
      expect: any;
      describe: any;
      it: any;
    }
  }
}

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from 'Routes';
import configureStore from 'store/configureStore';

export const browserHistory = createBrowserHistory();
export const { store } = configureStore(undefined);

// Render function containing the HMR AppContainer
const renderApp = () => {
  render(
    <AppContainer>
            <Provider store={store}>
                    <Router history={browserHistory}>
                        <Routes />
                    </Router>
            </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

async function init() {
  renderApp();
}

init();
