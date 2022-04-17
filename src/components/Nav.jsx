import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import navImg from '../img/nav1.jpg'

function Nav({onSearch}) {
  return (
    <nav className="navBar">
      <img src={navImg} alt="Navbar" />
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;