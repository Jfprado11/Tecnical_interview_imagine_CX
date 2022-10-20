import { useEffect, useState } from 'react';

export const useFetch = (callback, url = null) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = null;
        if (url) {
          res = await callback(url);
        } else {
          res = await callback();
        }
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, setData, error, loading };
};
