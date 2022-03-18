import React from "react";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ListContinuousTraining from "../containers/ListContinuousTraining";
import AcademicTraining from "../components/AcademicTraining";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  Jorge Collazos
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  Programador
                </h3>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Estado</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Contratado
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Última actualización</span>
                    <span className="ml-auto">16/04/2022</span>
                  </li>
                </ul>
              </div>
              <div className="my-4"></div>
              <Skills />
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Datos personales</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nombres</div>
                      <div className="px-4 py-2">Jorge Luis</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Apellidos</div>
                      <div className="px-4 py-2">Collazos Martinez</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Nº documento
                      </div>
                      <div className="px-4 py-2">71930040</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Número de contacto
                      </div>
                      <div className="px-4 py-2">+51 983593021</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Dirección</div>
                      <div className="px-4 py-2">
                        Villa el Salvador, Lima - Perú
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Correo electrónico
                      </div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jorgecollaz@gmail.com"
                        >
                          jorgecollaz@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Fecha de nacimiento
                      </div>
                      <div className="px-4 py-2">13/05/2002</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Espectativa salarial
                      </div>
                      <div className="px-4 py-2">s/. 000000</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-4"></div>

              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-1">
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
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Experiencia</span>
                    </div>
                    <ul className="list-inside space-y-2">
                        <Experience />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-4"></div>

              <div className="">
                <div className="grid md:grid-cols-2 xs:grid-cols-1">
                  <div className="bg-white p-3 mr-2 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
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
                      <span className="tracking-wide">Formación académica</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <AcademicTraining />
                    </ul>
                  </div>

                  <div className="bg-white p-3 ml-2 shadow-sm rounded-sm">
                    <ListContinuousTraining/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
