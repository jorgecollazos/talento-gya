import React from "react";

const RecoveryPassword = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-tl from-tAquamarine to-tBlue py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img
          className="object-contain w-72"
          src="http://143.198.153.102:4010/img/TALENTO.png"
          alt="logo"
        />

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabindex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Crea una nueva contraseña
          </p>


          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label
              for="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Contraseña
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="viewport"
                />
              </div>
            </div>
          </div>
          <div className="mt-6  w-full">
            <label
              for="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Repita la contraseña
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="viewport"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPassword;
