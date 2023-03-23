import { useEffect, useState } from "react";
import paginate from "./utils.js";
const url = "https://api.github.com/users/ImKetan1610/followers?per_page=100";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

export { useFetch };
