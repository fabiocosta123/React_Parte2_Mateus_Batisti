// custom hooks
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // refatorando post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [itemId, setItemId] = useState(null);

  // loading
  const [loading, setLoading] = useState(false);

  // tratando erros
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // loading
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve um erro ao carregar os dados");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // refatorando post

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fecthOptions = [url, config];

        const res = await fetch(...fecthOptions);
        const json = await res.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();
        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, setCallFetch, url, itemId]);

  return { data, httpConfig, loading, error };
};
