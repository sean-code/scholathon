import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
      <>
        <nav class="navbar" style={{color:'black', backgroundColor:'#fff', boxShadow:'0px 2px 10px', marginBottom:'10px', }}>
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <ul class="menu-items">
                  <li><a href="#/">Home</a></li>
                  <li><a href="#/contact">Contact</a></li>
              </ul>
              <h1 class="logo">Upstick Movie App</h1>
          </div>
        </nav>
      </>
  );
}

export default Navbar;
