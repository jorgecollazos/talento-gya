import { useEffect, useState } from "react";
import axios from 'axios';

const useGetInfo = (API) => {
	const [info, setInfo] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setInfo(response.data);
	}, []);

	return info;
};

export default useGetInfo;