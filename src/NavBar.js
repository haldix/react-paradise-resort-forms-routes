import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>Paradise Resort</div>
      <NavLink to='/' exact activeClassName='is-active'>
        Home
      </NavLink>
      <NavLink to='/signup' exact activeClassName='is-active'>
        Sign Up
      </NavLink>
      <NavLink to='/clients' exact activeClassName='is-active'>
        Clients
      </NavLink>
      <NavLink to='/contact' exact activeClassName='is-active'>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
