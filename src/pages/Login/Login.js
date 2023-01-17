import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <p className="py-4">
              Do not share your login information with anyone.
            </p>
          </div>
          <div className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
            </div>
            <p className="my-2">
              Don't have an account?
              <Link to="/register">
                <button className="btn btn-active btn-link">Register</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
