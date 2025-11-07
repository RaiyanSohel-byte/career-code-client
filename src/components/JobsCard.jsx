import React from "react";
import { Link, useNavigate } from "react-router";

const JobsCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-lg border border-base-300 rounded-xl p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-500 mb-1">
          <strong>Type:</strong> {job.job_type}
        </p>
        <p className="text-gray-500 mb-1">
          <strong>Category:</strong> {job.category}
        </p>
        <p className="text-gray-500 mb-1">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-gray-500 mb-3">
          <strong>Deadline:</strong> {job.deadline}
        </p>
      </div>

      <Link
        className="btn btn-primary w-full mt-4"
        to={`/jobDetails/${job._id}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default JobsCard;
