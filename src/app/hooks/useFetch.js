import { Request } from '../service/request';
import { GET } from '../constants/constants';
import { useEffect, useState } from 'react';

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async (endpoint) => {
    setLoading(true);
    const submitRequest = new Request(null, endpoint, GET);
    submitRequest.get().then(
      (value) => {
        setData(value);
        setLoading(false);
      },
      (reason) => {
        setError(reason);
      }
    );
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return { getData, data, loading, error };
};
