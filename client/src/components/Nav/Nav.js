import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__header">
        <h1>Amazonly</h1>
      </Link>
      <div className="navbar__search">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
        </svg>
        <input
          className="navbar__search_input"
          type="text"
          placeholder="search"
        />
      </div>
      <ul className="navbar__list">
        <Link to="/products" className="navbar__list_item">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="navbar__list_item">
          <li>Cart</li>
        </Link>
        <Link to="/login" className="navbar__list_item">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
