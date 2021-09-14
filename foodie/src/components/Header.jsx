import React from 'react';

function Header(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid header-section">
          <a className="heading" href="www.google.com"><h1 ><strong>Foodie</strong></h1></a>
          <div className="link-div">
              <a className="nav-item links" href="www.google.com">Log in</a>
              <a className="nav-item links" href="www.google.com">Sign up</a>
          </div>
      </div>

    </nav>
  )
}

export default Header;
