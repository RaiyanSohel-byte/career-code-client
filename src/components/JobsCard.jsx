import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col gap-4 w-full max-w-sm mx-auto border border-gray-100">
      {/* Company Logo */}
      <div className="flex justify-center -mt-12">
        <img
          src={job.company.logo}
          alt={job.company.name}
          className="w-20 h-20 object-contain rounded-full border-2 border-primary shadow-sm"
        />
      </div>

      {/* Job Info */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-primary">{job.title}</h2>
        <span className="text-sm text-gray-500">{job.company.name}</span>
        <span className="text-sm font-medium text-amber-500">
          {job.category}
        </span>

        {/* Job Metadata */}
        <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm mt-2">
          <div className="flex items-center gap-1">
            <IoCloudUploadSharp className="text-primary" />
            <span>{job.posted_at}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-primary" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBriefcase className="text-primary" />
            <span>{job.job_type}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMoneyBillWave className="text-primary" />
            <span>
              {job.salary.min.toLocaleString()}–
              {job.salary.max.toLocaleString()} {job.salary.currency}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-2 line-clamp-3">
          {job.description}
        </p>
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-end">
        <Link
          to={`/jobDetails/${job._id}`}
          className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobsCard;
