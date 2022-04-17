import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import navImg from '../img/nav1.jpg'
import AboutMeBtn from './AboutMeBtn';

function Nav({onSearch}) {
  return (
    <nav className="navBar">
      <img src={navImg} alt="Navbar image" />
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;