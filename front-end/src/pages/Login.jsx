import React from "react";

const Login = () => {
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
            Iniciar sesión con tu cuenta
          </p>
          <p
            tabindex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            No tines una cuenta?{" "}
            <a
              href="javascript:void(0)"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Registrate aquí
            </a>
          </p>
          <div className="flex flex-row">
            <div className="basis-1/2">
              <button
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4 mr-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                  alt="google"
                />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Google
                </p>
              </button>
            </div>
            <div className="basis-1/2">
              <button
                aria-label="Continue with github"
                role="button"
                className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4 ml-2"
              >
                <img
                  src="../img/icons8-facebook-nuevo.svg"
                  alt="facebook"
                />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Facebook
                </p>
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              O
            </p>
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
          <div className="mt-6  w-full">
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
          <p
            tabindex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Olvidaste tu contraseña?{" "}
            <a
              href="javascript:void(0)"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Recuperala aquí
            </a>
          </p>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
