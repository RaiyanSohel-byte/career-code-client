import React from "react";
import {
  FaUserEdit,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl border border-base-300 p-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6">
          <img
            src={user.photoURL}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-primary/20 shadow-sm"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
            <p className="text-gray-500 mb-3 flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-primary" /> {user.email}
            </p>
            <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-primary" /> {user.location}
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2 mt-1">
              <FaCalendarAlt /> Joined {user.joined}
            </p>
          </div>
          <button className="btn btn-outline btn-primary mt-4 md:mt-0">
            <FaUserEdit /> Edit Profile
          </button>
        </div>

        {/* BIO SECTION */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-gray-600 leading-relaxed">{user.bio}</p>
        </div>

        {/* JOB STATS */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Application Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary/10 p-5 rounded-xl text-center border border-primary/20">
              <h3 className="text-xl font-bold text-primary">
                {user.appliedJobs}
              </h3>
              <p className="text-gray-600 text-sm">Total Applications</p>
            </div>
            <div className="bg-success/10 p-5 rounded-xl text-center border border-success/20">
              <h3 className="text-xl font-bold text-success">
                {user.accepted}
              </h3>
              <p className="text-gray-600 text-sm">Accepted</p>
            </div>
            <div className="bg-warning/10 p-5 rounded-xl text-center border border-warning/20">
              <h3 className="text-xl font-bold text-warning">{user.pending}</h3>
              <p className="text-gray-600 text-sm">Pending</p>
            </div>
            <div className="bg-error/10 p-5 rounded-xl text-center border border-error/20 sm:col-span-3 md:col-span-1">
              <h3 className="text-xl font-bold text-error">{user.rejected}</h3>
              <p className="text-gray-600 text-sm">Rejected</p>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-end">
          <button className="btn btn-outline btn-sm">Change Password</button>
          <button className="btn btn-error btn-sm text-white">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
