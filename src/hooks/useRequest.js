import { useState, useEffect } from 'react';

const useRequest = (request) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const resp = await request();
        setResponse(resp.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [request]);

  return { response, isLoading, error };
};

export default useRequest;
