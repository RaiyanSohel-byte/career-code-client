import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import JobsCard from "./JobsCard";

const LatestJobs = () => {
  const axiosPublic = useAxios();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axiosPublic.get("/latestJobs").then((data) => {
      console.log(data.data);
      setJobs(data.data);
    });
  }, [axiosPublic]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5 max-w-[1440px] mx-auto">
      {jobs.map((job) => (
        <JobsCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default LatestJobs;
