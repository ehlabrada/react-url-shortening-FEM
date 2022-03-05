import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.shrtco.de/v2/shorten",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
