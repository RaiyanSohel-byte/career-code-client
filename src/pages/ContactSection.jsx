import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
        <p className="text-gray-700 text-lg md:text-xl mt-4">
          Have questions or need assistance? Reach out to us and we'll get back
          to you as soon as possible.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary text-2xl" />
            <p className="text-gray-700">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary text-2xl" />
            <p className="text-gray-700">+880 123 456 789</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-2xl" />
            <p className="text-gray-700">support@career-code.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary text-white rounded-full px-6 py-2 font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
