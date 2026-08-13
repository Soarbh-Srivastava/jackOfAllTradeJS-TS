import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isMounted = true;
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((error) => {
        setError(Error);
        isMounted = false;
        setLoading(false);
      });
    return (isMounted = false);
  });
  return { data, error, loading };
};
