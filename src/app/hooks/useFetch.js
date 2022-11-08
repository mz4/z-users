import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async (endpoint) => {
      setLoading(true);
      try {
        await fetch(endpoint)
          .then((res) => res.json())
          .then((res) => {
            setData(res.data);
            setLoading(false);
          });
      } catch (e) {
        setError(e.message);
      }
    };
    getData(endpoint);
  }, [endpoint]);

  return [data, loading, error];
};
