import React from "react";
import EditSkills from "@components/EditSkills";

const Skills = () => {
  return (
    <div className="bg-white p-3 hover:shadow">
      <div className="flex justify-between space-x-2 font-semibold text-lg text-gray-900 leading-8">
        <div className="flex justify-start">
          <span className="text-green-500">
            <svg
              className="h-7 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <span>Habilidades blandas</span>
        </div>
        <div>
          <EditSkills />
        </div>
      </div>

      <div className="mx-8">
        <div className="flex items-center justify-between text-gray-400 text-base">
          <p>Habilidades comunicativas:</p>
          <p>30%</p>
        </div>
        <div className="w-full h-3 bg-green-100 rounded-full mb-4">
          <div style={{ width: "30%" }} className="h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-base">
          <p>Trabajo en equipo:</p>
          <p>30%</p>
        </div>
        <div className="w-full h-3 bg-indigo-100 rounded-full mb-4">
          <div style={{ width: "30%" }} className="h-full text-center text-xs text-white bg-indigo-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-base">
          <p>Autogestion e iniciativas:</p>
          <p>30%</p>
        </div>
        <div className="w-full h-3 bg-pink-100 rounded-full mb-4">
          <div style={{ width: "30%" }} className="h-full text-center text-xs text-white bg-pink-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-base">
          <p>Puntualidad:</p>
          <p>30%</p>
        </div>
        <div className="w-full h-3 bg-blue-100 rounded-full mb-4">
          <div style={{ width: "30%" }} className=" h-full text-center text-xs text-white bg-blue-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-base">
          <p>Pensamiento crítico:</p>
          <p>30%</p>
        </div>
        <div className="w-full h-3 bg-red-100 rounded-full mb-4">
          <div style={{ width: "30%" }} className=" h-full text-center text-xs text-white bg-red-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
