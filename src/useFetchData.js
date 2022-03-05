import { useEffect, useState } from "react";
import axiosClient from "./apiClient";

const useFetchData = (link) => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get(`/${link}`);
        console.log("Response Data", response.data);
        setdata(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [link]);

  return { data, loading, error };
};

export default useFetchData;
