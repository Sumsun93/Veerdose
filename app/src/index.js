/**
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/containers/App';

import { wsConnect, getAllMessages } from 'src/store/socket';

// Store = Gestionnaire de state externe
import store from 'src/store';
/**
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  render(rootComponent, document.getElementById('root'));
  store.dispatch(wsConnect());
  store.dispatch(getAllMessages());
});
