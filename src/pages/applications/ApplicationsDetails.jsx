import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

const ApplicationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const axiosSecured = useAxiosSecured();

  useEffect(() => {
    axiosSecured
      .get(`http://localhost:3000/applications/${id}`)
      .then((data) => {
        setApplication(data.data);
      });
  }, [axiosSecured, id]);

  const handleWithdraw = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, withdraw it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecured
          .delete(`http://localhost:3000/applications/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              setApplication(null);
            }
          });
        navigate("/allJobs");
        Swal.fire({
          title: "Deleted!",
          text: "Your application has been withdrawn.",
          icon: "success",
        });
      }
    });
  };

  if (!application) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-xl shadow-xl border border-base-300 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Application Details</h1>
          <span
            className={`badge rounded-full ${
              application.status === "pending"
                ? "badge-warning"
                : application.status === "accepted"
                ? "badge-success"
                : "badge-error"
            } px-4 py-3 text-sm`}
          >
            {application.status.charAt(0).toUpperCase() +
              application.status.slice(1)}
          </span>
        </div>

        {/* USER INFO */}
        <div className="flex items-center gap-4 mb-6 border-b pb-4">
          <img
            src={application.userInfo.photoURL}
            alt="User"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {application.userInfo.name}
            </h2>
            <p className="text-sm text-gray-500">
              {application.userInfo.email}
            </p>
          </div>
        </div>

        {/* JOB INFO */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-2">
            Job Information
          </h3>
          <ul className="text-sm space-y-1">
            <li>
              <strong>Title:</strong> {application.jobInfo.job_title}
            </li>
            <li>
              <strong>Type:</strong> {application.jobInfo.job_type}
            </li>
            <li>
              <strong>Category:</strong> {application.jobInfo.category}
            </li>
            <li>
              <strong>Location:</strong> {application.jobInfo.location}
            </li>
            <li>
              <strong>Deadline:</strong> {application.jobInfo.deadline}
            </li>
          </ul>
        </div>

        {/* APPLICATION INFO */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-2">
            Application Information
          </h3>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              <strong>Career Summary:</strong>{" "}
              {application.applicationInfo.career_summary}
            </p>
            <p>
              <strong>Skills:</strong> {application.applicationInfo.skills}
            </p>
            <p>
              <strong>Experience:</strong>{" "}
              {application.applicationInfo.experience}
            </p>
            <p>
              <strong>Why Hire:</strong> {application.applicationInfo.why_hire}
            </p>
            <div className="flex gap-3 flex-wrap">
              <p>
                <strong>Min Salary:</strong> ৳
                {application.applicationInfo.min_salary}
              </p>
              <p>
                <strong>Max Salary:</strong> ৳
                {application.applicationInfo.max_salary}
              </p>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-2">
            External Links
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={application.applicationInfo.portfolio_link}
              className="link link-primary"
              target="_blank"
              rel="noreferrer"
            >
              🌐 Portfolio
            </a>
            <a
              href={application.applicationInfo.linkedin_link}
              className="link link-primary"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>
            <a
              href={application.applicationInfo.resume_link}
              className="link link-primary"
              target="_blank"
              rel="noreferrer"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-sm text-gray-500">
            Submitted on {application.submitted_At}
          </p>
          <div className="flex gap-3">
            <button
              className="btn btn-outline btn-sm"
              onClick={() => navigate(-1)}
            >
              ← Go Back
            </button>
            <button
              onClick={() => handleWithdraw(id)}
              className="btn btn-error btn-sm text-white"
            >
              Withdraw Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
