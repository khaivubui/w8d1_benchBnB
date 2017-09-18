import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as AuthUtils from './util/session_api_util.js';
// import * as Actions from './actions/session_actions';
// import * as BenchUtils from './util/bench_api_util.js';
// import * as BenchActions from './actions/bench_actions';
// window.AuthUtils = AuthUtils;
// window.Actions = Actions;
// window.BenchUtils = BenchUtils;
// window.BenchActions = BenchActions;

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    entities: {},
    session: {
      currentUser: window.currentUser || null,
    },
    errors: {
      session: []
    }
  };

  const store = configureStore(preloadedState);
  window.store = store;

  delete window.currentUser;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});
