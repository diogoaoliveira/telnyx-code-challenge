/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';
// Our app
import App from './app/App';

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
