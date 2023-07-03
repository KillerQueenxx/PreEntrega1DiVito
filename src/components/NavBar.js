import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span className="brand-name">Brand</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.coderhouse.com/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.coderhouse.com/#">
                Sing In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.coderhouse.com/">
                Others
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
