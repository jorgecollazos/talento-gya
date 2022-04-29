import { useEffect, useState } from "react";
import axios from "axios";

const useGetResult = (API, list) => {
  const [result, setResult] = useState([]);

  useEffect(async () => {
    const response = await axios.post(API, list);
    setResult(response.data);
  }, []);

  return result;
};

export default useGetResult;
