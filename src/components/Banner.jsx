import React, { useEffect, useState } from "react";
import { FaSearch, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import useAxiosSecured from "../hooks/useAxiosSecured";
import { Link } from "react-router";

const Banner = () => {
  const axiosSecured = useAxiosSecured();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axiosSecured.get("http://localhost:3000/jobs/").then((data) => {
      setJobs(data.data);
    });
  }, [axiosSecured]);
  return (
    <section className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-6 lg:px-12">
        {/* Right side image */}
        <img
          src="https://img.freepik.com/free-vector/hiring-concept-illustration_114360-4718.jpg"
          alt="Job Portal Illustration"
          className="max-w-sm lg:max-w-lg mx-auto rounded-2xl shadow-lg"
        />

        {/* Left side content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Find Your <span className="text-secondary">Dream Job</span> Today 🚀
          </h1>
          <p className="py-6 text-gray-600">
            Discover thousands of job opportunities that match your skills,
            passion, and experience. Connect with top employers and take your
            career to the next level.
          </p>

          {/* Search Bar */}
          <Link to={`/allJobs`} className="btn btn-primary rounded-full">
            Get Started
          </Link>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-primary">{jobs.length}</h3>
              <p className="text-gray-500 text-sm">Active Jobs</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">1K+</h3>
              <p className="text-gray-500 text-sm">Companies</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">10K+</h3>
              <p className="text-gray-500 text-sm">Job Seekers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
