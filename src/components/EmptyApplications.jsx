import React from "react";
import { Link } from "react-router";
import { FaFolderOpen } from "react-icons/fa";

const EmptyApplications = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 p-10 rounded-2xl shadow-xl border border-base-300 text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-6 rounded-full">
            <FaFolderOpen className="text-primary text-5xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3">No Applications Found</h2>
        <p className="text-gray-500 mb-6">
          You haven’t applied for any jobs yet. Once you apply, your
          applications will appear here for tracking and management.
        </p>

        <Link to="/allJobs" className="btn btn-primary btn-wide">
          Browse Jobs
        </Link>
      </div>
    </div>
  );
};

export default EmptyApplications;
