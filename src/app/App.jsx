/**
 * @overview Our main app layout.
 */
import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import About from './about';
import Blog from './blog';
import Home from './home';
import { PostSingle } from './blog/post';

const App = () => (
  <div>
    <Navigation/>

    <div className='mx-3'>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route exact path='/blog' component={Blog} />
      <Route path='/blog/:postId' component={PostSingle} />
    </div>
  </div>
);

export default App;
