import React from "react";
import useGetInfo from "@hooks/useGetInfo";
import EditAbout from "@components/EditAbout";

const API = "http://localhost:4010/about-training/djesusccori@gmail.com";

const About = () => {
  const about = useGetInfo(API);

  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      {about.map((about) => (
        <div>
          <div className="flex justify-between space-x-2 font-semibold text-lg text-gray-900 leading-8">
            <div className="flex justify-start">
              <span className="text-green-500">
                <svg
                  className="h-7 mx-2 "
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
            <div>
              <EditAbout about={about} />
            </div>
          </div>
          <div className="text-gray-700">
            <div className="text-base">
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-06.png"
                  />
                </div>
                <div className="mx-2">
                  {about.primernombre} {about.segundonombre}{" "}
                  {about.apellidopaterno} {about.apellidomaterno}
                </div>
              </div>
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-03.png"
                  />
                </div>
                <div className="mx-2">{about.numerodedocumento}</div>
              </div>
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-04.png"
                  />
                </div>
                <div className="mx-2">{about.email}</div>
              </div>
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-02.png"
                  />
                </div>
                <div className="mx-2">
                  {about.numerocelular1} {about.numerocelular2}
                </div>
              </div>
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-01.png"
                  />
                </div>
                <div className="mx-2">{about.fechadenacimiento}</div>
              </div>
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-05.png"
                  />
                </div>
                <div className="mx-2">
                  {about.distrito}, {about.provincia} - {about.pais}
                </div>
              </div>
              <div className="px-5 py-2 flex justify-start items-center">
                <div>
                  <img
                    className="w-7"
                    src="http://143.198.153.102:4010/img/icons/iconos-07.png"
                  />
                </div>
                <div className="mx-2">
                s/. {about.expectativasueldo}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
