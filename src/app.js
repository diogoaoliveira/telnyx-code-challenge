/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Our app
import App from './app/App';
// import About from './app/about';
// import Home from './app/home';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
