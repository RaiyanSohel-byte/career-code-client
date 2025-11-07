import React, { useState } from "react";
import GoogleButton from "../components/GoogleButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        alert("Sign in successful");
        navigate(location?.state || "/");
      })
      .catch((error) => alert(error.code));
  };
  return (
    <div>
      <div className="min-h-[calc(100vh-70px)] bg-base-200 flex justify-center items-center px-4">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center text-primary mb-4">
              Welcome Back 👋
            </h2>
            <p className="text-center text-sm mb-6 text-gray-500">
              Log in to continue to{" "}
              <span className="font-semibold">Career-Code</span>
            </p>

            <form onSubmit={(e) => handleLogin(e)}>
              {" "}
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                  />
                  {showPass ? (
                    <FaEyeSlash
                      onClick={() => setShowPass(false)}
                      className="absolute top-3 right-4 cursor-pointer z-10"
                      size={14}
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPass(true)}
                      className="absolute top-3 right-4 cursor-pointer z-10"
                      size={14}
                    />
                  )}
                </div>
                <div>
                  <Link to="/resetPassword" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-primary mt-4">Login</button>
              </fieldset>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Login */}
            <GoogleButton handleGoogleSignIn={handleGoogleSignIn} />

            {/* Register Redirect */}
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="link link-primary font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
