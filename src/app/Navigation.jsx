import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className='navbar navbar-expand-lg my-4'>
    <h1 className='navbar-brand mb-0'>My app</h1>
    <div className='collapse navbar-collapse'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <NavLink to={`/`} className='nav-link' activeClassName='active'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to={`/about`} className='nav-link' activeClassName='active'>About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
