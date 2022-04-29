import React from "react";

const Consultor = ({ consultor }) => {
  return (
    <li>
      <div className="w-full flex items-center justify-center">
        <div className="xl:w-1/2 sm:w-1/2 w-full 2xl:w-1/2 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* <img
                src="https://cdn.tuk.dev/assets/templates/olympus/profile.png"
                alt="profile" width="150px"
              /> */}
              <p className="mt-2 text-xl sm:text-base md:text-lg font-semibold text-center text-white">
              {consultor.primernombre} {consultor.apellidopaterno}{" "}
            {consultor.apellidomaterno}
              </p>
            </div>
          </div>
          {/* <div className="flex items-center mt-7">
            <div className="">
              <p className="text-xs text-gray-300">Correo</p>
              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">
              {consultor.email}
              </p>
            </div>
            <div className="ml-12">
              <p className="text-xs text-gray-300">Teléfono</p>
              <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">
              {consultor.numerocelular1}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </li>
  );
};

export default Consultor;
