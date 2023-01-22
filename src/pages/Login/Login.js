import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();


  let from = location.state?.from?.pathname || "/";
  
  const loginHandaler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const googleProvider = new GoogleAuthProvider();
  const googleHandaler = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
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
          <form onSubmit={loginHandaler} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
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
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
              <button onClick={googleHandaler} className="btn btn-primary my-2">
                Google
              </button>
            </div>
            <p className="my-2">
              Don't have an account?
              <Link to="/register">
                <button className="btn btn-active btn-link">Register</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
