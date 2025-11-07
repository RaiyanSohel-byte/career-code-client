import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_baseURL,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
