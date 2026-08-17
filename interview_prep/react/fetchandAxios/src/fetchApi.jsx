import { useEffect } from "react";

export const FetchApi = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const delayMs = 1000;
    try {
      const fetchData = async (url, retries = 3, delayMs) => {
        const response = await fetch(url, { signal });
        setIsLoading(true)
        if (!response.ok) throw new Error("Server Error");
        const data = await response.json();
        setData(data);

      };
    } catch (err) {
      if(retries > 0){
        await new Promise(resolve => setTimeout(resolve,delayMs))
        return fetchData(url,retries -1,delayMs)
      }
      setError(err);
    }
    finally{
      isLoading(false)
    }
    return () => {
      controller.abort();
    };
  });
};
