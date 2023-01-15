import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../../image/Home/icon.png";

const Navbar = () => {
  return (
    <div style={{backgroundColor:'#282932' }}>
       <div className="navbar container mx-auto py-8 justify-between text-white">
      <div className="navbar-start">
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
          <h3 className="text-2xl mx-2">FoodFly</h3>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-yellow-400">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-500 text-black rounded-box w-52"
        >
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="ml-4">
        <a className="btn btn-warning">Login</a>
      </div>
    </div>

    </div>
   
  );
};

export default Navbar;
