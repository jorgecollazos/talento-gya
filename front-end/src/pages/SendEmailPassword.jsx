import React from "react";

const SendEmailPassword = () => {
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
            Ingresa tu correo registrado
          </p>


          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              aria-labelledby="email"
              type="email"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <p
            tabindex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            *Se enviará un correo para restablecer la contraseña
          </p>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmailPassword;
