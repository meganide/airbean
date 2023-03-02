import "./navbarLayout.scss"

import Cart from '../Cart/Cart';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router';
import React from 'react';

function NavbarLayout() {
  return (
    <>
      <header className="navbar-layout">
        <Nav />
        <Cart />
      </header>
      <Outlet />
    </>
  );
}

export default NavbarLayout;
