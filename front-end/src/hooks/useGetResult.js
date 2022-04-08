import { useEffect, useState } from "react";
import axios from 'axios';

const useGetResult = (API, data) => {
	const [result, setResult] = useState([]);

	useEffect(async () => {
		const response = await axios.post(API, data);
		setResult(response.data);
	}, []);

	return result;
};

export default useGetResult;