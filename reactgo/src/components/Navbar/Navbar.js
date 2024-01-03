import React from 'react';
import { Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-items">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/about">About</a>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
