import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Links } from "react-router";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { MdWork, MdCategory } from "react-icons/md";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import Loader from "../../components/Loader";

const JobDetails = () => {
  const { id } = useParams();
  const axiosSecured = useAxiosSecured();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  // Fetch single job
  useEffect(() => {
    axiosSecured.get(`/jobs/${id}`).then((res) => {
      setJob(res.data);
    });
  }, [axiosSecured, id]);

  // Time ago formatter
  const timeAgo = (postedAt) => {
    const diffMs = new Date() - new Date(postedAt);
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHrs < 1) return "Just now";
    if (diffHrs < 24) return `${diffHrs} hours ago`;
    const diffDays = Math.floor(diffHrs / 24);
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  };

  if (!job) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Job Header */}

      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          <Link
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xl font-bold mb-4 text-primary"
          >
            <FaArrowAltCircleLeft /> Go Back
          </Link>
          <div className="flex items-center gap-4">
            <img
              src={job.company?.logo}
              alt={job.company?.name}
              className="w-20 h-20 object-contain rounded-xl border border-base-300 p-2 bg-base-200"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                {job.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-500 mt-1">
                <FaBuilding /> <span>{job.company?.name}</span>
              </div>
            </div>
          </div>

          {/* Job Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-primary" /> {job.location}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdWork className="text-primary" /> {job.job_type}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdCategory className="text-primary" /> {job.category}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaMoneyBillWave className="text-primary" /> {job.salary.min} -{" "}
              {job.salary.max} {job.salary.currency}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaClock className="text-primary" /> Deadline:{" "}
              {new Date(job.deadline).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              ⏱️ Posted {timeAgo(job.posted_at)}
            </div>
          </div>

          {/* Description */}
          <div className="divider"></div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          {job.responsibilities?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {job.requirements?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Requirements</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Company Info */}
          <div className="mt-8 bg-base-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              About {job.company?.name}
            </h3>
            <p className="text-gray-700">{job.company?.info}</p>
            <p className="mt-2 text-sm text-gray-500">
              Contact: {job.company?.email}
            </p>
          </div>

          {/* Apply Button */}
          <div className="card-actions justify-end mt-6">
            <Link
              to={`/applicationForm/${job._id}`}
              onClick={() => navigate(`/application/apply/${job._id}`)}
              className="btn btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
