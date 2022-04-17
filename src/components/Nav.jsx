import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav className="navBar">
      <img src="https://p0.pikrepo.com/preview/440/980/white-and-brown-mountains-under-orange-sky-during-sunset.jpg" alt="Navbar" />
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;