import Nav from '../Nav/Nav';
import { Outlet } from 'react-router';
import React from 'react';

function NavbarLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default NavbarLayout;
