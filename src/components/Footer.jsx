import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-secondary">Career-Code</h2>
          <p className="text-gray-400">
            Career-Code is a modern job portal connecting talented professionals
            with top companies. Find jobs, post openings, and grow your career.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-secondary transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-secondary">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-secondary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className="hover:text-secondary transition-colors"
              >
                All Jobs
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-secondary transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-secondary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-secondary">Contact</h3>
          <p className="text-gray-400">Dhaka, Bangladesh</p>
          <p className="text-gray-400">+880 123 456 789</p>
          <p className="text-gray-400">support@career-code.com</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Career-Code. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
