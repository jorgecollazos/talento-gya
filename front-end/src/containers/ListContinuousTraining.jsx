import React, { useEffect, useState } from "react";
import ContinuousTraining from "@components/ContinuousTraining";
import axios from "axios";

const API = "http://localhost:4010/continuous-training/jorgecollaz@gmail.com";

const ListContinuousTraining = () => {
  const [continuous, setContinuous] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setContinuous(response.data);
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span clas="text-green-500">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              fill="#fff"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>
        <span className="tracking-wide">Formación continua</span>
      </div>
      <ul className="list-inside space-y-2">
        {continuous.map((continuous) => (
          <ContinuousTraining continuous={continuous} key={continuous.idformacioncontinua} />
        ))}
      </ul>
    </div>
  );
};

export default ListContinuousTraining;
