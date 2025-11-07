import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl border border-base-300 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-500 mb-8">
          Have questions or feedback? Fill out the form below and we’ll get back
          to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Our Contact Info</h2>
            <p className="text-gray-600">
              📍 123 Main Street, Chattogram, Bangladesh
            </p>
            <p className="text-gray-600">📧 support@example.com</p>
            <p className="text-gray-600">📞 +880 1234 567 890</p>
            <p className="text-gray-600">⏰ Mon – Fri: 9:00 AM – 6:00 PM</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="textarea textarea-bordered w-full"
                rows={5}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary w-full mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
