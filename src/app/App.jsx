/**
 * @overview Our main app layout.
 */
import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import About from './about';
import Home from './home';

const App = () => (
  <div>
    <Navigation/>

    <div className='mx-3'>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </div>
);

export default App;
