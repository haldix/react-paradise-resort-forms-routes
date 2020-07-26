import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' exact activeClassName='is-active'>
        Home
      </NavLink>
      <NavLink to='/signup' exact activeClassName='is-active'>
        Sign Up
      </NavLink>
      <NavLink to='/clients' exact activeClassName='is-active'>
        Clients
      </NavLink>
    </nav>
  );
};

export default NavBar;
