import React, { useEffect, useState } from "react";
import Experience from "@components/Experience";
import AddExperience from "@components/AddExperience";
import axios from "axios";

const API = "http://143.198.153.102:4010/experience-training/djesusccori@gmail.com";

const ListExperience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setExperience(response.data);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center  space-x-2 font-semibold text-lg text-gray-900 leading-8 mx-2 mb-2">
        <div className="flex justify-start ">
          <span className="text-green-500 mr-2">
            <svg
              className="h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
            </svg>
          </span>
          <span className="tracking-wide">Experiencia laboral</span>
        </div>
        <div>
          <AddExperience />
        </div>
      </div>
      <ul className="list-inside space-y-2 mx-4">
        {experience.map((experience) => (
          <Experience
            experience={experience}
            key={experience.idexperiencialaboral}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListExperience;
