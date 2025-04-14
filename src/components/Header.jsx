import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
      <Link to="/" className="logo">Rick & Morty WIKI</Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/saved" className={location.pathname === '/saved' ? 'active' : ''}>
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
