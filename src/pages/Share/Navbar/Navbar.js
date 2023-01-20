import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import logo from "../../../image/Home/icon.png";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const logoutHandaler = () => {
    userLogout();
  };
  return (
    <div style={{ backgroundColor: "#282932" }}>
      <div className="navbar container mx-auto py-8 justify-between text-white">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
            <h3 className="text-2xl mx-2">FoodFly</h3>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-yellow-400">
              <Link to="/home">Home</Link>
            </li>
            {user?.email && (
              <li className="hover:text-yellow-400">
                <Link to="/myreviews">My Reviews</Link>
              </li>
            )}

            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
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
          {user.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-yellow-500 text-black rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logoutHandaler}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
