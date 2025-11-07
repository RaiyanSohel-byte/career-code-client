import React, { useEffect, useState } from "react";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import Swal from "sweetalert2";
import EmptyApplications from "../../components/EmptyApplications";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const axiosSecured = useAxiosSecured();

  useEffect(() => {
    axiosSecured
      .get(`http://localhost:3000/applications?email=${user.email}`)
      .then((data) => {
        setApplications(data.data);
      });
  }, [axiosSecured, user]);
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
              setApplications(applications.filter((app) => app._id !== id));
            }
          });

        Swal.fire({
          title: "Withdrawn!",
          text: "Your application has been withdrawn.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="min-h-screen bg-base-200 py-10 px-5">
      {applications.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            My Applications
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Application Card 1 */}
            {applications.map((app) => (
              <div className="card bg-base-100 shadow-xl border border-base-300">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={app.userInfo.photoURL}
                      alt="Company Logo"
                      className="w-10 h-10 rounded-md"
                    />
                    <div>
                      <h2 className="card-title text-lg">
                        {app.jobInfo.job_title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Software Engineering • Full-time
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {app.jobInfo.location}
                    </p>
                    <p>
                      <span className="font-semibold">Deadline:</span>{" "}
                      {app.jobInfo.deadline}
                    </p>
                    <p>
                      <span className="font-semibold">Applied On:</span>{" "}
                      {app.submitted_At}
                    </p>
                  </div>

                  <div className="mt-3">
                    <span className="badge badge-warning text-xs px-3 py-3">
                      {app.status}
                    </span>
                    {/* Other options: badge-success (Accepted), badge-error (Rejected) */}
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/myApplications/${app._id}`}
                      className="btn btn-primary btn-outline btn-sm"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleWithdraw(app._id)}
                      className="btn btn-error btn-sm text-white"
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EmptyApplications />
      )}
    </div>
  );
};

export default MyApplications;
