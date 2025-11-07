import React from "react";
import {
  FaEnvelopeOpenText,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaUserAlt,
} from "react-icons/fa";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { GiGraduateCap } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("Logged Out");
      })
      .catch((error) => alert(error.code));
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "active-navbar" : "inactive-navbar"}`
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "active-navbar" : "inactive-navbar"}`
          }
        >
          <FaInfoCircle />
          About
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <details>
              <summary className="text-primary font-semibold border border-primary rounded-full">
                <BsSuitcaseLgFill /> Jobs
              </summary>
              <ul className="p-2 w-[150px] mx-auto border border-base-300 space-y-2">
                <li>
                  <NavLink
                    to="/allJobs"
                    className={({ isActive }) =>
                      `${isActive ? "active-navbar" : "inactive-navbar"}`
                    }
                  >
                    All Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myJobs"
                    className={({ isActive }) =>
                      `${isActive ? "active-navbar" : "inactive-navbar"}`
                    }
                  >
                    My Jobs
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to="/allJobs"
            className={({ isActive }) =>
              `${isActive ? "active-navbar" : "inactive-navbar"}`
            }
          >
            <BsSuitcaseLgFill /> Jobs
          </NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink
              to="/myApplications"
              className={({ isActive }) =>
                `${isActive ? "active-navbar" : "inactive-navbar"}`
              }
            >
              <FaEnvelopeOpenText /> My Applications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProfile"
              className={({ isActive }) =>
                `${isActive ? "active-navbar" : "inactive-navbar"}`
              }
            >
              <FaUserAlt /> My Profile
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "active-navbar" : "inactive-navbar"}`
          }
        >
          <IoCallSharp />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-extrabold text-primary">
            <GiGraduateCap size={32} /> Career
            <span className="text-secondary">Code</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex relative">
          <ul className="menu menu-horizontal px-1 z-20 gap-3">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <>
              {" "}
              <div
                className="tooltip tooltip-bottom hidden lg:block"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="rounded-full w-10 h-10 border-2 border-secondary"
                />
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-primary rounded-full"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary rounded-full">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-outline rounded-full"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
