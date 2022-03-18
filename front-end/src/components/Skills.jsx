import React from "react";

const Skills = () => {
  return (
    <div className="bg-white p-3 hover:shadow">
      <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
        <span className="text-green-500">
          <svg
            className="h-5 fill-current"
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

      <div class="flex flex-col gap-4">
        <div>
          <div class="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div>
              <span class="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-red-500">
              Habilidades comunicativas:
              </span>
            </div>
            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div class="w-3/4 h-full text-center text-xs text-white bg-red-500 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div>
              <span class="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-tAquamarine">
              Trabajo en equipo:
              </span>
            </div>
            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div class="w-3/4 h-full text-center text-xs text-white bg-tAquamarine rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div>
              <span class="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-500">
              Autogestion e iniciativas:
              </span>
            </div>
            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div>
              <span class="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-indigo-500">
              Puntualidad:
              </span>
            </div>
            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div class="w-3/4 h-full text-center text-xs text-white bg-indigo-500 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div>
              <span class="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-500">
              Pensamiento crítico:

              </span>
            </div>
            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div class="w-3/4 h-full text-center text-xs text-white bg-pink-500 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
