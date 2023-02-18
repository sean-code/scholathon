import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light mb-5"  style={{backgroundColor:'#fff', boxShadow:'5px 2px 8px'}}>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-black text-lg brand-text" to="/">
              Scholathon Movie App
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
