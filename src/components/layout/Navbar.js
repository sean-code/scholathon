import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
            Scholathon Movie App
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
