import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
  const { createUser,userProfileUpdate  } = useContext(AuthContext);
  const navigate = useNavigate();
  const createUserHandaler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo=form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        userProfileUpdate (name,photo)
        .then(() => console.log("name update"))
        .catch((error) => console.log(error));    
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));

   
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 px-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register Your Account</h1>
            <p className="py-4">
              Inter your valid email address and password to register your
              account
            </p>
          </div>
          <form onSubmit={createUserHandaler} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                className="input input-bordered"
                name="photo"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Register</button>
            </div>
            <p className="my-2">
              Already have an Account?
              <Link to="/login">
                <button className="btn btn-active btn-link">Login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
