import React, { useEffect, useState } from "react";
import useAxiosSecured from "../../hooks/useAxiosSecured";
import JobsCard from "../../components/JobsCard";

const AllJobs = () => {
  const axiosSecured = useAxiosSecured();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axiosSecured.get("/jobs").then((data) => {
      setJobs(data.data);
    });
  }, [axiosSecured]);
  return (
    <div>
      <h3 className="text-5xl my-5 font-bold text-center text-primary">
        All <span className="text-secondary">Jobs</span>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5 max-w-[1440px] mx-auto">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
