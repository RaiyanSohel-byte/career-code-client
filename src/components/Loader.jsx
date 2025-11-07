import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <RingLoader color=" #03438c" />
    </div>
  );
};

export default Loader;
