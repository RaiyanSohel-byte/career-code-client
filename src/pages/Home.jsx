import React from "react";
import LatestJobs from "../components/LatestJobs";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="mb-10">
        <Banner />
      </div>
      <div>
        <h3 className="text-5xl my-5 font-bold text-center text-primary">
          Latest <span className="text-secondary">Jobs</span>
        </h3>
        <LatestJobs />
      </div>
    </div>
  );
};

export default Home;
