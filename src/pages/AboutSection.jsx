import React from "react";
import { FaUsers, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-primary">About Career-Code</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Career-Code is a modern job portal connecting talented job seekers
          with top employers. Find your dream job, apply effortlessly, and let
          companies discover your skills.
        </p>
      </div>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaUsers className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">For Job Seekers</h3>
          <p className="text-gray-600">
            Browse hundreds of job postings, apply easily, and track your
            applications in one place.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaBriefcase className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">For Employers</h3>
          <p className="text-gray-600">
            Post jobs, review applications, and find the perfect talent for your
            organization quickly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaLaptopCode className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart & Modern</h3>
          <p className="text-gray-600">
            Enjoy a responsive, interactive platform built with the latest web
            technologies for seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
