import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
